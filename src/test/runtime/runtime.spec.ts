import * as assert from 'assert';
import { template, ζd, ζv } from '../../iv';
import { ElementNode, reset, getTemplate, stringify, logNodes } from '../utils';
import { IvContext } from '../../iv/types';

describe('Iv Runtime', () => {
    let body: ElementNode;

    beforeEach(() => {
        body = reset();
    });

    it("should support text and elements", function () {
        let foo = template(`() => {
            <div>
                # Hello World #
            </div>
        }`);

        let t = getTemplate(foo, body).refresh();
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello World #
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        let bar = template(`() => {
            <div>
                <span> # abc # </>
                    # Hello #
                    # World
                      (!) #
                <span/>
                <div/>
            </div>
        }`);

        body = reset();
        let t2 = getTemplate(bar, body).refresh();
        assert.equal(stringify(t2), `
            <body::E1>
                <div::E3>
                    <span::E4>
                        #::T5 abc #
                    </span>
                    #::T6 Hello #
                    #::T7 World                      (!) #
                    <span::E8/>
                    <div::E9/>
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("should support simple dynamic text nodes", function () {
        let foo = template(`(name) => {
            <div>
                # Hello {name} #
            </div>
        }`);

        let t = getTemplate(foo, body).refresh({ name: "Homer" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello Homer #
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ name: "World" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello World # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ name: "World" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello World # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '3 - no changes');
    });

    it("should support multiple dynamic text nodes and one-time expressions", function () {
        let tpl = template(`(name) => {
            <div>
                # 1-time: {::name} #
                <span> # name:{name}, name+123:{name+123}# </span>
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ name: "Homer" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T5 1-time: Homer #
                    <span::E4>
                        #::T6 name:Homer, name+123:Homer123#
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ name: "World" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T5 1-time: Homer #
                    <span::E4>
                        #::T6 name:World, name+123:World123# (1)
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ name: "World" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T5 1-time: Homer #
                    <span::E4>
                        #::T6 name:World, name+123:World123# (1)
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '3 - no changes');
    });

    it("should support content fragments", function () {
        let tpl = template(`(name) => {
            <div>
                <!> 
                    # Hello #
                    <span> # {name} # </span>
                </!>
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ name: "Homer" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello #
                    <span::E5>
                        #::T6 Homer #
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ name: "World" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello #
                    <span::E5>
                        #::T6 World # (1)
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ name: "World" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello #
                    <span::E5>
                        #::T6 World # (1)
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '3');
    });

    it("should generate fragments when template contains multiple root nodes", function () {
        let tpl = template(`(name) => {
            <div>
                <span> #{name}# </span>
            </div>
            # Hello {name} #
        }`);

        let t = getTemplate(tpl, body).refresh({ name: "Marge" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <span::E4>
                        #::T5Marge#
                    </span>
                </div>
                #::T6 Hello Marge #
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ name: "Homer" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <span::E4>
                        #::T5Homer# (1)
                    </span>
                </div>
                #::T6 Hello Homer # (1)
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("should support element attributes", function () {
        let tpl = template(`(msg) => {
            <div class="main" title={::msg}>
                <span class="sub" title={msg}> # ... # </span>
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ msg: "hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main" a:title="hello">
                    <span::E4 a:class="sub" a:title="hello">
                        #::T5 ... #
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ msg: "hi" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main" a:title="hello">
                    <span::E4 a:class="sub" a:title="hi"(1)>
                        #::T5 ... #
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("should support element properties", function () {
        let tpl = template(`(msg) => {
            <div [className]="main" [title]={::msg}>
                <span [className]={msg} [title]="sub"> # ... # </span>
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ msg: "hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 className="main" title="hello">
                    <span::E4 title="sub" className="hello">
                        #::T5 ... #
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ msg: "hi" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 className="main" title="hello">
                    <span::E4 title="sub" className="hi"(1)>
                        #::T5 ... #
                    </span>
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("should support js statements", function () {
        let tpl = template(`(msg) => {
            let m2 = msg + "!";
            <div>
                m2 += "!";
                # Hello {m2} #
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ msg: "Bart" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello Bart!! #
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ msg: "Marge" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 Hello Marge!! # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("should not refresh if params don't change", function () {
        let tpl = template(`(name1, name2) => {
            # {name1} # 
            # {name2} # 
        }`);

        let t = getTemplate(tpl, body).refresh({ name1: "Bart", name2: "Lisa" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Bart #
                #::T4 Lisa #
                //::C2 template anchor
            </body>
        `, '1');

        assert.equal((t["context"] as IvContext).lastRefresh, 1, "refreshed #1");

        t.refresh({ name1: "Bart", name2: "Lisa" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Bart #
                #::T4 Lisa #
                //::C2 template anchor
            </body>
        `, '2');
        assert.equal((t["context"] as IvContext).lastRefresh, 1, "no second refresh");
    });

    it("should use simple param classes", function () {
        @ζd class Names {
            @ζv firstName;
            @ζv lastName;
        }

        let n = new Names();
        assert.equal(n["$changed"], false, "unchanged when created");
        n.firstName = "Homer";
        assert.equal(n["$changed"], true, "changed (1)");
        n.lastName = "Simpson";
        assert.equal(n["$changed"], true, "changed (2)");
        n["$reset"]();
        assert.equal(n["$changed"], false, "unchanged after reset");
        n.firstName = "Homer";
        assert.equal(n["$changed"], false, "unchanged for identical value");
        n.firstName = "Marge";
        assert.equal(n["$changed"], true, "changed (3)");
    });

    // cpt
    // todo error if refresh before attach
    // todo validate argument names
});