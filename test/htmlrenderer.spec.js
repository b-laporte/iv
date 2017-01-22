/**
 * HTML renderer tests
 * Copyright Bertrand Laporte 2016
 * Created on 02/07/16.
 */

/* global describe, it, beforeEach, afterEach, expect, DocumentFragment */

import {iv} from '../src/iv/iv';
import {render} from '../src/iv/htmlrenderer';
import {diff} from './utils';

describe('HTML renderer', () => {
    let OPTIONS2 = {indent: "            ", showRef: true};

    it('should render CREATE_GROUP for root function', () => {
        let pkg = iv `
            <function #test nbr msg>
                <div class="hello">
                    // some comment
                    <span class="one" title="blah" foo=nbr+4> {{msg}} </span>
                    <span [class]=("two"+nbr) [baz]=nbr+3 [bar]=nbr*2> World </span>
                </div>
            </function>
        `;

        let df = new DocumentFragment();

        pkg.test.uid = "XX";
        let view = render(pkg.test, df, {nbr: 42, msg: "Hello"}), nd;

        nd = df.firstChild;
        expect(nd.nodeType).toBe(Node.COMMENT_NODE);
        expect(nd.nodeValue).toBe("start: function XX:0:0");

        let divHello = nd = nd.nextSibling;
        expect(nd.nodeType).toBe(Node.ELEMENT_NODE);

        nd = nd.nextSibling;
        expect(nd.nodeType).toBe(Node.COMMENT_NODE);
        expect(nd.nodeValue).toBe("end: function XX:0:0");

        expect(divHello.tagName.toUpperCase()).toBe("DIV");
        expect(divHello.className).toBe("hello");
        expect(divHello.childNodes.length).toBe(2);

        nd = divHello.firstChild;
        expect(nd.tagName.toUpperCase()).toBe("SPAN");
        expect(nd.className).toBe("one");
        expect(nd.getAttribute("title")).toBe("blah");
        expect(nd.getAttribute("foo")).toBe("46");

        let txt = nd.childNodes[1];
        expect(txt.nodeValue).toBe("Hello");
        expect(txt.nodeType).toBe(Node.TEXT_NODE);

        nd = nd.nextSibling;
        expect(nd.tagName.toUpperCase()).toBe("SPAN");
        expect(nd.className).toBe("two42");
        expect(nd.getAttribute("baz")).toBe("45");
        expect(nd.getAttribute("bar")).toBe("84");
    });

    it('should render UPDATE_ELEMENT and UPDATE_TEXT', () => {
        let pkg = iv `
            <function #test nbr msg>
                <div class="hello">
                    // some comment
                    <span class="one" title="blah" foo=nbr+4> {{msg}} </span>
                    <span [class]=("two"+nbr) [baz]=nbr+3 [bar]=nbr*2> World </span>
                </div>
            </function>
        `;

        let df = new DocumentFragment();

        pkg.test.uid = "XX";
        let view = render(pkg.test, df, {nbr: 42, msg: "Hello"}), nd;

        view.refresh({nbr: 5, msg: "Hi"});

        nd = df.childNodes[1].childNodes[0].childNodes[1]; // text node
        expect(nd.nodeType).toBe(Node.TEXT_NODE);
        expect(nd.nodeValue).toBe("Hi");

        nd = df.childNodes[1].childNodes[0]; // span.one
        expect(nd.getAttribute("foo")).toBe("46"); // unchanged

        nd = df.childNodes[1].childNodes[1]; // span.two
        expect(nd.className).toBe("two5"); // changed
        expect(nd.getAttribute("baz")).toBe("8"); // changed
        expect(nd.getAttribute("bar")).toBe("10"); // changed
    });

    it('should render CREATE_GROUP and DELETE_GROUP in element', () => {
        let pkg = iv `
            <function #test nbr msg>
                <div class="hello">
                    first
                    % if (nbr === 9) {
                        <span> Hello Slartibartfast! </span>
                    % }
                    last
                </div>
            </function>
        `;

        let df = new DocumentFragment();

        pkg.test.uid = "XX";
        let view = render(pkg.test, df, {nbr: 42}), nd;

        nd = df.childNodes[1].childNodes[1]; // text: last
        expect(df.childNodes[1].childNodes.length).toBe(2);
        expect(nd.nodeValue).toBe(" last ");

        view.refresh({nbr: 9});
        expect(diff(view.vdom.toString(OPTIONS2), `\
            <#group 0 function ref="XX:0:0" att-nbr=9>
                <div 1 ref="XX:0:1" class="hello">
                    <#text 2 " first "/>
                    <#group 3 js ref="XX:0:2">
                        <span 4 ref="XX:0:3">
                            <#text 5 " Hello Slartibartfast! "/>
                        </span>
                    </#group>
                    <#text 6 " last "/>
                </div>
            </#group>`
        )).toBe("equal");
        nd = df.childNodes[1].childNodes[2]; // span
        expect(df.childNodes[1].childNodes.length).toBe(5);
        expect(nd.firstChild.nodeValue).toBe(" Hello Slartibartfast! ");
        expect(view.renderer.nodeMap["XX:0:2"]).not.toBe(null);
        expect(view.renderer.nodeMap["XX:0:3"]).not.toBe(null);

        view.refresh({nbr: 18});
        expect(df.childNodes[1].childNodes.length).toBe(2);
        expect(df.childNodes[1].childNodes[0].nodeValue).toBe(" first ");
        expect(df.childNodes[1].childNodes[1].nodeValue).toBe(" last ");
        expect(view.renderer.nodeMap["XX:0:2"]).toBe(undefined);
        expect(view.renderer.nodeMap["XX:0:3"]).toBe(undefined);

        //console.dir(df);
    });

    it('should render CREATE_GROUP and DELETE_GROUP in group', () => {
        let pkg = iv `
            <function #test a b c>
                <div class="hello">
                    hello
                    % if (true) {
                        % if (a) {
                            <span> A </span>
                        % }
                        % if (b) {
                            <span> B </span>
                        % }
                        % if (c) {
                            <span> C </span>
                        % }
                    % }
                </div>
            </function>
        `;

        let df = new DocumentFragment();
        pkg.test.uid = "XX";
        let view = render(pkg.test, df, {a: true, b: false, c: false}), nd;
        expect(diff(view.vdom.toString(OPTIONS2), `\
            <#group 0 function ref="XX:0:0" att-a=true att-b=false att-c=false>
                <div 1 ref="XX:0:1" class="hello">
                    <#text 2 " hello "/>
                    <#group 3 js ref="XX:0:2">
                        <#group 4 js ref="XX:0:3">
                            <span 5 ref="XX:0:4">
                                <#text 6 " A "/>
                            </span>
                        </#group>
                    </#group>
                </div>
            </#group>`
        )).toBe("equal");
        nd = df.childNodes[1]; // div.hello
        expect(nd.childNodes.length).toBe(6);
        expect(nd.childNodes[0].nodeValue).toBe(" hello ");
        expect(nd.childNodes[1].nodeValue).toBe("start: js XX:0:2");
        expect(nd.childNodes[2].nodeValue).toBe("start: js XX:0:3");
        expect(nd.childNodes[3].childNodes[0].nodeValue).toBe(" A ");
        expect(nd.childNodes[4].nodeValue).toBe("end: js XX:0:3");
        expect(nd.childNodes[5].nodeValue).toBe("end: js XX:0:2");

        view.refresh({a: true, b: true, c: true});
        expect(df.childNodes[1].childNodes.length).toBe(12);
        expect(nd.childNodes[5].nodeValue).toBe("start: js XX:0:5");
        expect(nd.childNodes[6].childNodes[0].nodeValue).toBe(" B ");
        expect(nd.childNodes[7].nodeValue).toBe("end: js XX:0:5");
        expect(nd.childNodes[8].nodeValue).toBe("start: js XX:0:7");
        expect(nd.childNodes[9].childNodes[0].nodeValue).toBe(" C ");
        expect(nd.childNodes[10].nodeValue).toBe("end: js XX:0:7");
        expect(nd.childNodes[11].nodeValue).toBe("end: js XX:0:2");

        view.refresh({a: true, b: false, c: true});
        expect(df.childNodes[1].childNodes.length).toBe(9);
        expect(nd.childNodes[5].nodeValue).toBe("start: js XX:0:7");
        expect(nd.childNodes[6].childNodes[0].nodeValue).toBe(" C ");
        expect(nd.childNodes[7].nodeValue).toBe("end: js XX:0:7");
    });

    it('should render CREATE_GROUP and DELETE_GROUP at element end', () => {
        let pkg = iv `
            <function #test a>
                <div class="hello">
                    hello
                    % if (a) {
                        <span> A </span>
                    % }
                </div>
            </function>
        `;

        let df = new DocumentFragment();
        pkg.test.uid = "XX";
        let view = render(pkg.test, df, {a: false}), nd;

        nd = df.childNodes[1]; // div.hello
        expect(nd.childNodes.length).toBe(1);

        view.refresh({a: true});
        expect(nd.childNodes.length).toBe(4);
        expect(nd.childNodes[0].nodeValue).toBe(" hello ");
        expect(nd.childNodes[1].nodeValue).toBe("start: js XX:0:2");
        expect(nd.childNodes[2].childNodes[0].nodeValue).toBe(" A ");
        expect(nd.childNodes[3].nodeValue).toBe("end: js XX:0:2");

        view.refresh({a: false});
        expect(nd.childNodes.length).toBe(1);
        expect(nd.childNodes[0].nodeValue).toBe(" hello ");
    });

    it('should ignore UPDATE_GROUP', () => {
        let pkg = iv `
            <function #test msg>
                <someTextInSpan [msg]=msg/>
                <someTextInSpan [msg]=msg/>
            </function>
            
            <function #someTextInSpan msg>
                <span [title]=msg>Some Text</span>
            </function>
        `;

        let df = new DocumentFragment();
        pkg.test.uid = "XX";
        let view = render(pkg.test, df, {msg: "hello"}), nd;
        expect(df.childNodes.length).toBe(8);
        expect(df.childNodes[2].title).toBe("hello");

        view.refresh({msg: "hello2"});
        expect(df.childNodes[2].title).toBe("hello2");
    });

    it('should support event handlers', () => {
        let pkg = iv `
            <function #test ctrl>
                <div class="foo">
                    <span class="bar" onclick(e)=ctrl.doClick(123,e)> click here </span>
                </div>
            </function>
        `;

        let data = 0, clsName = null, c = {
            doClick: function (msg, e) {
                data = msg + "!";
                clsName = e.target.className;
            }
        };

        let df = new DocumentFragment();
        pkg.test.uid = "XX";
        let view = render(pkg.test, df, {ctrl: c}), nd;

        expect(df.childNodes.length).toBe(3);
        let span = df.childNodes[1].childNodes[0];
        span.click();
        expect(data).toBe("123!");
        expect(clsName).toBe("bar");
    });

});