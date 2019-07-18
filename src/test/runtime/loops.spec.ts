import * as assert from 'assert';
import { template } from '../../iv';
import { ElementNode, reset, getTemplate, stringify, logNodes } from '../utils';

describe('Loops', () => {
    let body: ElementNode;

    beforeEach(() => {
        body = reset();
    });

    it("should work for simple elements / no keys", function () {
        let tpl = template(`(names) => {
            <div>
                for (let name of names) {
                    <div> # Hello {name} # </div>
                }
            </div>
        }`);

        let t = getTemplate(tpl, body).render({ names: ["Marge", "Homer"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        #::T5 Hello Marge #
                    </div>
                    <div::E6>
                        #::T7 Hello Homer #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.render({ names: ["Bart", "Homer"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        #::T5 Hello Bart # (1)
                    </div>
                    <div::E6>
                        #::T7 Hello Homer #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.render({ names: [] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3/>
                //::C2 template anchor
            </body>
        `, '3');

        t.render({ names: ["Bart", "Homer"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        #::T5 Hello Bart # (1)
                    </div>
                    <div::E6>
                        #::T7 Hello Homer #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '4');

        t.render({ names: ["Bart", "Maggie", "Marge"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        #::T5 Hello Bart # (1)
                    </div>
                    <div::E6>
                        #::T7 Hello Maggie # (1)
                    </div>
                    <div::E8>
                        #::T9 Hello Marge #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '5');

        t.render({ names: ["Homer"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        #::T5 Hello Homer # (2)
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '6');

        t.render({ names: ["Homer", "Maggie"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        #::T5 Hello Homer # (2)
                    </div>
                    <div::E6>
                        #::T7 Hello Maggie # (1)
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '7');
    });

    it("should work for simple elements / no keys (empty first)", function () {
        let tpl = template(`(names) => {
            <div>
                for (let name of names || []) {
                    <div> # Hello {name} # </div>
                }
                # last #
            </div>
        }`);

        let t = getTemplate(tpl, body).render({ names: undefined });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 last #
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.render({ names: ["Bart", "Maggie"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E5>
                        #::T6 Hello Bart #
                    </div>
                    <div::E7>
                        #::T8 Hello Maggie #
                    </div>
                    #::T4 last #
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.render({ names: [] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 last #
                </div>
                //::C2 template anchor
            </body>
        `, '3');

        t.render({ names: ["Marge"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E5>
                        #::T6 Hello Marge # (1)
                    </div>
                    #::T4 last #
                </div>
                //::C2 template anchor
            </body>
        `, '4');

        t.render({ names: ["Marge", "Maggie", "Homer"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E5>
                        #::T6 Hello Marge # (1)
                    </div>
                    <div::E7>
                        #::T8 Hello Maggie #
                    </div>
                    <div::E9>
                        #::T10 Hello Homer #
                    </div>
                    #::T4 last #
                </div>
                //::C2 template anchor
            </body>
        `, '5');

        t.render({ names: ["Homer"] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E5>
                        #::T6 Hello Homer # (2)
                    </div>
                    #::T4 last #
                </div>
                //::C2 template anchor
            </body>
        `, '6');
    });

    it("should work on root with multiple content", function () {
        let tpl = template(`(names) => {
            for (let name of names || []) {
                # Hello {name.first} #
                <div> # Last Name: {name.last} # </div>
            }
        }`);

        let t = getTemplate(tpl, body).render({ names: [{ first: "Homer", last: "Simpson" }, { first: "Mickey", last: "Mouse" }] });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Hello Homer #
                <div::E4>
                    #::T5 Last Name: Simpson #
                </div>
                #::T6 Hello Mickey #
                <div::E7>
                    #::T8 Last Name: Mouse #
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.render({ names: [{ first: "Mickey", last: "Mouse" }] });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Hello Mickey # (1)
                <div::E4>
                    #::T5 Last Name: Mouse # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.render({ names: [] });
        assert.equal(stringify(t), `
            <body::E1>
                //::C2 template anchor
            </body>
        `, '3');

        t.render({ names: [{ first: "Homer", last: "Simpson" }, { first: "Mickey", last: "Mouse" }, { first: "Bart", last: "Simpson" }] });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Hello Homer # (2)
                <div::E4>
                    #::T5 Last Name: Simpson # (2)
                </div>
                #::T6 Hello Mickey #
                <div::E7>
                    #::T8 Last Name: Mouse #
                </div>
                #::T9 Hello Bart #
                <div::E10>
                    #::T11 Last Name: Simpson #
                </div>
                //::C2 template anchor
            </body>
        `, '4');
    });

    it("should work with conditional child blocks", function () {
        let tpl = template(`(visible, list) => {
            for (let item of list) {
                <div>
                    if (item.first) {
                        # First name: {item.first} #
                    }
                </div>
            }
        }`);

        let t = getTemplate(tpl, body).render({ visible: true, list: [{ first: "Homer", last: "Simpson" }, { first: "Mickey", last: "Mouse" }] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    #::T4 First name: Homer #
                </div>
                <div::E5>
                    #::T6 First name: Mickey #
                </div>
                //::C2 template anchor
            </body>
        `, '1');
    });

    it("should work with conditional parent blocks (init false)", function () {
        const tpl = template(`(visible, list) => {
            <div>
                if (visible) {
                    <div>
                        <div>
                            # First #
                        </div>
                        for (let item of list) {
                            <div>
                                # {item.first} #
                            </div>
                        }
                    </div>
                }
            </div>
        }`);

        let t = getTemplate(tpl, body).render({ visible: false, list: [{ first: "Homer", last: "Simpson" }, { first: "Mickey", last: "Mouse" }] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3/>
                //::C2 template anchor
            </body>
        `, '1');

        t.render({ visible: true });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        <div::E5>
                            #::T6 First #
                        </div>
                        <div::E7>
                            #::T8 Homer #
                        </div>
                        <div::E9>
                            #::T10 Mickey #
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.render({ visible: false });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3/>
                //::C2 template anchor
            </body>
        `, '3');

        t.render({ visible: true, list: [{ first: "Marge", last: "Simpson" }] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        <div::E5>
                            #::T6 First #
                        </div>
                        <div::E7>
                            #::T8 Marge # (1)
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '4');
    });

    it("should work with conditional parent blocks (init true)", function () {
        const tpl = template(`(visible, list) => {
            <div>
                if (visible) {
                    <div>
                        <div>
                            # First #
                        </div>
                        for (let item of list) {
                            <div>
                                # {item.first} #
                            </div>
                        }
                    </div>
                }
            </div>
        }`);

        let t = getTemplate(tpl, body).render({ visible: true, list: [{ first: "Homer", last: "Simpson" }, { first: "Mickey", last: "Mouse" }] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        <div::E5>
                            #::T6 First #
                        </div>
                        <div::E7>
                            #::T8 Homer #
                        </div>
                        <div::E9>
                            #::T10 Mickey #
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.render({ visible: false });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3/>
                //::C2 template anchor
            </body>
        `, '2');

        t.render({ visible: true, list: [{ first: "Marge", last: "Simpson" }] });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3>
                    <div::E4>
                        <div::E5>
                            #::T6 First #
                        </div>
                        <div::E7>
                            #::T8 Marge # (1)
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '3');
    });
});
