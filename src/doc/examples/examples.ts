import content from './content';
import { NavigationState } from '../nav';
import { Router, Route } from '../../iv/router';
import { Data } from '../../trax';
import { template } from '../../iv';
import { xtrContent } from '../../iv/xtr-renderer';
import { code } from '../common';
import { IvContent } from '../../iv/types';


@Data export class PageState {
    categoryCode: string;
    itemCode: string;
}
const pageState = new PageState();
let router: Router;

export function loadRoutes(r: Router): void {
    router = r;
    r.add({
        "/examples/*": (r: Route, ns: NavigationState) => {
            ns.pageContent = pageLayout;
            pageState.categoryCode = content.categories[0].code;
            pageState.itemCode = content.categories[0].items[0].code;
        },
        "/examples/:name": (r: Route, ns: NavigationState) => {
            ns.pageContent = pageLayout;
            retrieveMenuItem(r.pathParams!.name);
        }
    });
}

function handleMenuClick(e: Event) {
    const ds = (e.target as any).dataset;
    if (ds.page) {
        router!.navigate("/examples/" + ds.page);
    }
}

const menu = template(`(content, state:PageState) => {
    <div class="main_menu" @onclick={handleMenuClick}>
        for (let cat of content.categories) {
            let catSelected = cat.code===state.categoryCode? " selected" : "";
            <div class={"menu cat container" + catSelected}> 
                <div class="title"> # {cat.title} # </div>
                <ul class="content">
                    for (let itm of cat.items) {
                        <li data-page={itm.code} class={(itm.code === state.itemCode)?"selected":""}>
                            #{itm.title}#
                        </>
                    }
                </>
            </div>
        }
    </>
}`, handleMenuClick);

@Data class Notion {
    name: string;
    $content: IvContent;
}
const notions = template(`(notionList:Notion[]) => {
    const len = notionList.length;
    <div class="notions">
        <div class="title"> # Notion{len!==1? "s": ""} covered in this example # </>
        <ul>
            for (let notion of notionList) {
                <li class="notion"> 
                    <span class="name"> #{notion.name}# </>
                    if (notion.$content) {
                        #: # <! @content={notion.$content}/>
                    }
                </>
            }
        </>
    </>
}`);

async function resolver(ref: string): Promise<any> {
    if (ref === "code") return code;
    if (ref === "notions") return notions;
    console.error("UNRESOLVED XTR REFERENCE (examples): " + ref);
    return null;
}

function retrieveMenuItem(itemCode: string, setOnPageState = true) {
    let defaultCategory = "", defaultItem: any, defaultItemCode = "";

    for (let cat of content.categories) {
        if (defaultCategory === "") {
            defaultCategory = cat.code;
        }
        for (let itm of cat.items) {
            if (defaultItemCode === "") {
                defaultItemCode = itm.code;
            }
            if (itm.code === itemCode) {
                if (setOnPageState) {
                    pageState.itemCode = itemCode;
                    pageState.categoryCode = cat.code;
                }
                return itm;
            }
        }
    }
    // not found
    if (setOnPageState) {
        pageState.categoryCode = defaultCategory;
        pageState.itemCode = defaultItemCode;
        return defaultItem;
    } else {
        return { title: "", code: "error", content: "" }
    }
}

const mainLayout = template(`(state:PageState) => {
    let item = retrieveMenuItem(state.itemCode);
    <div class="examples layout layout2">
        <div class="blockA2">
            <div class="menu">
                <*menu {content} {state}/>
            </>
            <div class="mainpanel" @xtrContent(xtr={item.content} {resolver})/>
        </>
        <div class="blockB2">
            if (item.code) {
                <div class="demo">
                    <h1> 
                        <a href={"./examples/" + item.code + "/"} target="_blank"
                            title="Open demo in a separate window"
                        > # live demo # </> 
                    </>
                    <iframe class="clock" src={"./examples/" + item.code + "/"}/>
                </>
            }
            
        </>
    </div>
}`, pageState, content, menu, xtrContent, resolver, retrieveMenuItem);

const pageLayout = template(`(state:PageState) => {
    <*mainLayout state={pageState}/>
}`, mainLayout);
