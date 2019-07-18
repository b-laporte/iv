import * as assert from 'assert';
import { template } from '../../iv';
import { ElementNode, reset, getTemplate, stringify, logNodes } from '../utils';

describe('Event handlers', () => {
    let body: ElementNode, index = 0, lastEvent: any = null, lastArg: number = 0;

    beforeEach(() => {
        body = reset();
        index = 0;
        lastEvent = null;
        lastArg = 0;
    });

    function doSomething(e, arg: number = 0) {
        index++;
        lastEvent = e;
        lastArg = arg;
    }

    const panel = template(`(type, $content) => {
        <div class={type}>
            # Panel #
            <div @content={$content}/>
        </div>
    }`);

    it("can be called on elements", function () {
        const tpl = template(`() => {
            <div class="main" click(e)={doSomething(e)}>
                # Click me #
            </div>
        }`);

        let t = getTemplate(tpl, body).render();

        assert.equal(index, 0, "index=0 before click");
        body.childNodes[0].click();
        assert.equal(index, 1, "index=1 after click");
        body.childNodes[0].click();
        assert.equal(index, 2, "index=2 after 2nd click");
        assert.equal(lastEvent.type, "click", "event properly passed");
    });

    it("can be defined multiple times", function () {
        let lastType = "";
        function doSomethingElse(type) {
            lastType = type;
        }

        const tpl = template(`() => {
            <div class="main" click(e)={doSomething(e)} click(x)={doSomethingElse(x.type)}>
                # Click me #
            </div>
        }`);

        let t = getTemplate(tpl, body).render();

        assert.equal(index, 0, "index=0 before click");
        assert.equal(lastType, "", "lastType is empty at init");
        body.childNodes[0].click();
        assert.equal(index, 1, "index=1 after click");
        assert.equal(lastType, "click", "doSomethingElse was called");
    });

    it("should support element creation/removal", function () {

        const tpl = template(`(condition, someVar) => {
            if (condition) {
                <div class="main" click(e)={doSomething(e, someVar)}>
                    # Click me #
                </div>
            }
        }`);

        let t = getTemplate(tpl, body).render({ condition: true, someVar: 1 }), mainDiv = body.childNodes[0];
        assert.equal(index, 0, "index=0 before click");
        assert.equal(lastArg, 0, "lastArg=0 before click");
        mainDiv.click();
        assert.equal(index, 1, "index=1 after click");
        assert.equal(lastArg, 1, "lastArg=1 after click");

        t.render({ condition: false });
        assert.equal(body.childNodes[0].uid, "C2", "body is empty");

        t.render({ condition: true, someVar: 42 });
        mainDiv.click();
        assert.equal(index, 2, "index=2 after 2nd click");
        assert.equal(lastArg, 42, "lastArg=42 after click");
    });

    it("can be defined in deferred content", function () {
        const tpl = template(`() => {
            <*panel type="info">
                <div class="main" click(e)={doSomething(e)}>
                    # Click me #
                </div>
            </*panel>
        }`);

        let t = getTemplate(tpl, body).render(), mainDiv = body.childNodes[0].childNodes[1].childNodes[0];
        // console.log(stringify(t));
        assert.equal(index, 0, "index=0 before click");
        mainDiv.click();
        assert.equal(index, 1, "index=1 after click");
        mainDiv.click();
        assert.equal(index, 2, "index=2 after 2nd click");
        assert.equal(lastEvent.type, "click", "event properly passed");
    });
});
