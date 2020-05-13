// @@extract: import
import { $template } from '../../../iv';
import { IvTemplate } from '../../../iv/types';

// @@extract: main
const main = $template`(title:string, nameList:string[]) => {
    <div class="commands">
        <div class = "lbl"> Click on a button to focus one of the elements below </>
        <button @onclick={focusTitle}> title </>
        <button @onclick={focus3rd}> 3rd item </>
        <button @onclick={focusNext}> next item </>
    </>
    <h1 #title tabindex=0> {title} </h1>
    <ul>
        $let count=0;
        $for (let name of nameList) {
            $exec count++;
            <li #item #third={count===3} tabindex=0> {name} </>
        }
    </>
}`;

// mainTemplate is the template object generated by main()
const mainTemplate: IvTemplate = main()
    .attach(document.body)
    .render({
        title: "The Simpsons",
        nameList: ["Homer", "Marge", "Bart", "Lisa", "Maggie"]
    });

// @@extract: focusTitle
function focusTitle() {
    const h1 = mainTemplate.query("#title");
    if (h1) {
        h1.focus();
    }
}

// @@extract: focus3rd
function focus3rd() {
    const li = mainTemplate.query("#third");
    if (li) {
        li.focus();
    }
}

// @@extract: focusNext
let nextIdx = -1;
function focusNext() {
    nextIdx++;
    // true parameter: query all items
    const lis = mainTemplate.query("#item", true);
    if (lis) {
        if (nextIdx < 0 || nextIdx >= lis.length) {
            nextIdx = 0;
        }
        lis[nextIdx].focus();
    }
}
