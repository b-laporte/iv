import * as assert from 'assert';
import { template } from '../../iv';
import { ElementNode, reset, getTemplate, stringify, logNodes } from '../utils';

// Components with content
describe('Content Components', () => {
    let body: ElementNode;

    beforeEach(() => {
        body = reset();
    });

    let panel = template(`(type, $content) => {
        <div class={type}>
            # Panel #
            <div @content={$content}/>
        </div>
    }`);

    let header = template(`(text, $content) => {
        <!>
            <!>
                # :::: {text} :::: #
                <div @content={$content}/>
            </>
        </>
    }`);

    let section = template(`(text, open, $content) => {
        <section>
            # :::: {text} {open? "(open)" : "(closed)"} :::: #
            if (open) {
                <div @content={$content}/>
            }
        </section>
    }`);

    let panel2 = template(`(type, $content) => {
        <div class={type}>
            # Panel #
            <! @content={$content}/>
        </div>
    }`);

    let header2 = template(`(text, $content) => {
        # :::: {text} :::: #
        <! @content={$content}/>
    }`);

    let section2 = template(`(text, open, $content) => {
        <section>
            # :::: {text} {open? "(open)" : "(closed)"} :::: #
            if (open) {
                <! @content={$content}/>
            }
        </section>
    }`);

    it("can project & update content (cpt host:element / content:element / projection host: element)", function () {
        let tpl = template(`(message) => {
            <div class="main">
                <$panel type="important">
                    <div> # Message: {message} # </div>
                </>
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ message: "Hello!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    <div::E5 a:class="important">
                        #::T6 Panel #
                        <div::E7>
                            <div::E4>
                                #::T8 Message: Hello! #
                            </div>
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ message: "Hi!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    <div::E5 a:class="important">
                        #::T6 Panel #
                        <div::E7>
                            <div::E4>
                                #::T8 Message: Hi! # (1)
                            </div>
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ message: "Hi!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    <div::E5 a:class="important">
                        #::T6 Panel #
                        <div::E7>
                            <div::E4>
                                #::T8 Message: Hi! # (1)
                            </div>
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ message: undefined });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    <div::E5 a:class="important">
                        #::T6 Panel #
                        <div::E7>
                            <div::E4>
                                #::T8 Message:  # (2)
                            </div>
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '4');
    });

    it("can project & update content (cpt host:fragment / content:element / projection host: element)", function () {
        let tpl = template(`(message) => {
            <!>
                <$panel type="important">
                    <div> # Message: {message} # </div>
                </>
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ message: "Hello!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="important">
                    #::T5 Panel #
                    <div::E6>
                        <div::E3>
                            #::T7 Message: Hello! #
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ message: "Hi!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="important">
                    #::T5 Panel #
                    <div::E6>
                        <div::E3>
                            #::T7 Message: Hi! # (1)
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ message: "Hello!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="important">
                    #::T5 Panel #
                    <div::E6>
                        <div::E3>
                            #::T7 Message: Hello! # (2)
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '3');
    });

    it("can project & update content (cpt host:element / content:fragment / projection host: element)", function () {
        let tpl = template(`(title, message) => {
            <div class="main">
                <$header text={title}>
                    <div> # Line A: {message} # </div>
                    <div> # Line B: {message} # </div>
                </>
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ title: "Info", message: "Hello!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    #::T5 :::: Info :::: #
                    <div::E4>
                        <div::E6>
                            #::T8 Line A: Hello! #
                        </div>
                        <div::E7>
                            #::T9 Line B: Hello! #
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ title: "Info 2", message: "How are you?" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    #::T5 :::: Info 2 :::: # (1)
                    <div::E4>
                        <div::E6>
                            #::T8 Line A: How are you? # (1)
                        </div>
                        <div::E7>
                            #::T9 Line B: How are you? # (1)
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("can project & update content (cpt host:fragment / content:fragment / projection host: element)", function () {
        let tpl = template(`(title, message) => {
            <!>
                <$header text={title}>
                    <div> # Line A: {message} # </div>
                    <div> # Line B: {message} # </div>
                </>
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ title: "Info", message: "Hello!" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T4 :::: Info :::: #
                <div::E3>
                    <div::E5>
                        #::T7 Line A: Hello! #
                    </div>
                    <div::E6>
                        #::T8 Line B: Hello! #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ title: "Info2", message: "Hello World!" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T4 :::: Info2 :::: # (1)
                <div::E3>
                    <div::E5>
                        #::T7 Line A: Hello World! # (1)
                    </div>
                    <div::E6>
                        #::T8 Line B: Hello World! # (1)
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("can project & update content (cpt host:element / content:element / projection host: fragment)", function () {
        let tpl = template(`(message) => {
            <div class="main">
                <$panel2 type="important">
                    <div> # Message: {message} # </div>
                </>
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ message: "Hello!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    <div::E5 a:class="important">
                        #::T6 Panel #
                        <div::E4>
                            #::T7 Message: Hello! #
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ message: "Hi!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    <div::E5 a:class="important">
                        #::T6 Panel #
                        <div::E4>
                            #::T7 Message: Hi! # (1)
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ message: "Hi!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    <div::E5 a:class="important">
                        #::T6 Panel #
                        <div::E4>
                            #::T7 Message: Hi! # (1)
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ message: undefined });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    <div::E5 a:class="important">
                        #::T6 Panel #
                        <div::E4>
                            #::T7 Message:  # (2)
                        </div>
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("can project & update content (cpt host:fragment / content:element / projection host: fragment)", function () {
        let tpl = template(`(message, messageType) => {
            <$panel2 type={messageType}>
                <div> # Message: {message} # </div>
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ message: "Hello!", messageType: "important" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="important">
                    #::T5 Panel #
                    <div::E3>
                        #::T6 Message: Hello! #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ message: "Hi!", messageType: "warning" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="warning"(1)>
                    #::T5 Panel #
                    <div::E3>
                        #::T6 Message: Hi! # (1)
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("can project & update content (cpt host:element / content:fragment / projection host: fragment)", function () {
        let tpl = template(`(title, message) => {
            <div class="main">
                <$header2 text={title}>
                    <div> # Line A: {message} # </div>
                    <div> # Line B: {message} # </div>
                </>
            </div>
        }`);

        let t = getTemplate(tpl, body).refresh({ title: "Info", message: "Hello!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    #::T4 :::: Info :::: #
                    <div::E5>
                        #::T7 Line A: Hello! #
                    </div>
                    <div::E6>
                        #::T8 Line B: Hello! #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ title: "Info2", message: "Hello2!" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E3 a:class="main">
                    #::T4 :::: Info2 :::: # (1)
                    <div::E5>
                        #::T7 Line A: Hello2! # (1)
                    </div>
                    <div::E6>
                        #::T8 Line B: Hello2! # (1)
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("can project & update content (cpt host:fragment / content:fragment / projection host: fragment)", function () {
        let tpl = template(`(title, message) => {
            <$header2 text={title}>
                <!> # Line A: {message} # </>
                <!> # Line B: {message} # </>
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ title: "Info", message: "Hello!" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 :::: Info :::: #
                #::T4 Line A: Hello! #
                #::T5 Line B: Hello! #
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ title: "Info2", message: "Hello2!" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 :::: Info2 :::: # (1)
                #::T4 Line A: Hello2! # (1)
                #::T5 Line B: Hello2! # (1)
                //::C2 template anchor
            </body>
        `, '2');
    });

    it("defer attribute updates", function () {
        let tpl = template(`(message, type) => {
            <$panel2 type={type}>
                <div class={type}> # Message: {message} # </div>
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ message: "Hello!", type: "info" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="info">
                    #::T5 Panel #
                    <div::E3 a:class="info">
                        #::T6 Message: Hello! #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ message: "Hello!", type: "info" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="info">
                    #::T5 Panel #
                    <div::E3 a:class="info">
                        #::T6 Message: Hello! #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ message: "Hello!", type: "warning" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="warning"(1)>
                    #::T5 Panel #
                    <div::E3 a:class="warning"(1)>
                        #::T6 Message: Hello! #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ message: "Hello2!", type: "warning" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="warning"(1)>
                    #::T5 Panel #
                    <div::E3 a:class="warning"(1)>
                        #::T6 Message: Hello2! # (1)
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '4');
    });

    it("defer property updates", function () {
        let tpl = template(`(message, type) => {
            <$panel2 type={type}>
                <div [className]={type}> # Message: {message} # </div>
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ message: "Hello!", type: "info" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="info">
                    #::T5 Panel #
                    <div::E3 className="info">
                        #::T6 Message: Hello! #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ message: "Hello!", type: "warning" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="warning"(1)>
                    #::T5 Panel #
                    <div::E3 className="warning"(1)>
                        #::T6 Message: Hello! #
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ message: "Hello2!", type: "warning" });
        assert.equal(stringify(t), `
            <body::E1>
                <div::E4 a:class="warning"(1)>
                    #::T5 Panel #
                    <div::E3 className="warning"(1)>
                        #::T6 Message: Hello2! # (1)
                    </div>
                </div>
                //::C2 template anchor
            </body>
        `, '3');
    });

    it("should support conditions in call stack (projection host: fragment / init false)", function () {
        let tpl = template(`(text, message) => {
            # Start #
            if (message) {
                <$header2 text={text}>
                    # Message: {message} #
                </>
            }
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info2", message: "Message2" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info2 :::: #
                #::T4 Message: Message2 #
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (1)
                #::T4 Message: Message3 # (1)
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (1)
                #::T4 Message: Message3 # (1)
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info3", message: "Message6" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (1)
                #::T4 Message: Message6 # (2)
                //::C2 template anchor
            </body>
        `, '6');
    });

    it("should support conditions in call stack (projection host: div / init false)", function () {
        let tpl = template(`(text, message) => {
            # Start #
            if (message) {
                <$header text={text}>
                    # Message: {message} #
                </>
            }
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info2", message: "Message2" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info2 :::: #
                <div::E5>
                    #::T4 Message: Message2 #
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (1)
                <div::E5>
                    #::T4 Message: Message3 # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (1)
                <div::E5>
                    #::T4 Message: Message3 # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info3", message: "Message6" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (1)
                <div::E5>
                    #::T4 Message: Message6 # (2)
                </div>
                //::C2 template anchor
            </body>
        `, '6');
    });

    it("should support conditions in call stack (projection host: fragment / init true)", function () {
        let tpl = template(`(text, message) => {
            # Start #
            if (message) {
                <$header2 text={text}>
                    # Message: {message} #
                </>
            }
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info1", message: "Message1" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info1 :::: #
                #::T4 Message: Message1 #
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (1)
                #::T4 Message: Message3 # (1)
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (1)
                #::T4 Message: Message3 # (1)
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info3", message: "Message6" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (1)
                #::T4 Message: Message6 # (2)
                //::C2 template anchor
            </body>
        `, '6');
    });

    it("should support conditions in call stack (projection host: div / init true)", function () {
        let tpl = template(`(text, message) => {
            # Start #
            if (message) {
                <$header text={text}>
                    # Message: {message} #
                </>
            }
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info1", message: "Message1" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info1 :::: #
                <div::E5>
                    #::T4 Message: Message1 #
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (1)
                <div::E5>
                    #::T4 Message: Message3 # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (1)
                <div::E5>
                    #::T4 Message: Message3 # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info3", message: "Message6" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (1)
                <div::E5>
                    #::T4 Message: Message6 # (2)
                </div>
                //::C2 template anchor
            </body>
        `, '6');
    });

    it("should support conditions in content (projection host: fragment / init false)", function () {
        let tpl = template(`(text, message) => {
            # Start #
            <$header2 text={text}>
                # content #
                if (message) {
                    # Message: {message} {text} #
                }
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T4 :::: Info :::: #
                #::T5 content #
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info2", message: "Message2" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T4 :::: Info2 :::: # (1)
                #::T5 content #
                #::T6 Message: Message2 Info2 #
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T4 :::: Info3 :::: # (2)
                #::T5 content #
                #::T6 Message: Message3 Info3 # (1)
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info3", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T4 :::: Info3 :::: # (2)
                #::T5 content #
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T4 :::: Info3 :::: # (2)
                #::T5 content #
                #::T6 Message: Message3 Info3 # (1)
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info6", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T4 :::: Info6 :::: # (3)
                #::T5 content #
                //::C2 template anchor
            </body>
        `, '6');

        t.refresh({ text: "Info7", message: "Message7" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T4 :::: Info7 :::: # (4)
                #::T5 content #
                #::T6 Message: Message7 Info7 # (2)
                //::C2 template anchor
            </body>
        `, '7');
    });

    it("should support conditions in content (projection host: div / init false)", function () {
        let tpl = template(`(text, message) => {
            # Start #
            <$header text={text}>
                # content #
                if (message) {
                    # Message: {message} {text} #
                }
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info :::: #
                <div::E4>
                    #::T6 content #
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info2", message: "Message2" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info2 :::: # (1)
                <div::E4>
                    #::T6 content #
                    #::T7 Message: Message2 Info2 #
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (2)
                <div::E4>
                    #::T6 content #
                    #::T7 Message: Message3 Info3 # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info4 :::: # (3)
                <div::E4>
                    #::T6 content #
                </div>
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (4)
                <div::E4>
                    #::T6 content #
                    #::T7 Message: Message3 Info3 # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info3", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (4)
                <div::E4>
                    #::T6 content #
                </div>
                //::C2 template anchor
            </body>
        `, '6');

        t.refresh({ text: "Info7", message: "Message7" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info7 :::: # (5)
                <div::E4>
                    #::T6 content #
                    #::T7 Message: Message7 Info7 # (2)
                </div>
                //::C2 template anchor
            </body>
        `, '7');
    });

    it("should support conditions in content (projection host: fragment / init true)", function () {
        let tpl = template(`(text, message) => {
            # Start #
            <$header2 text={text}>
                # content #
                if (message) {
                    # Message: {message} {text} #
                }
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", message: "Message" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info :::: #
                #::T6 content #
                #::T4 Message: Message Info #
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info2", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info2 :::: # (1)
                #::T6 content #
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (2)
                #::T6 content #
                #::T4 Message: Message3 Info3 # (1)
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info3", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (2)
                #::T6 content #
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info3 :::: # (2)
                #::T6 content #
                #::T4 Message: Message3 Info3 # (1)
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info6", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info6 :::: # (3)
                #::T6 content #
                //::C2 template anchor
            </body>
        `, '6');

        t.refresh({ text: "Info7", message: "Message7" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T5 :::: Info7 :::: # (4)
                #::T6 content #
                #::T4 Message: Message7 Info7 # (2)
                //::C2 template anchor
            </body>
        `, '7');
    });

    it("should support conditions in content (projection host: div / init true)", function () {
        let tpl = template(`(text, message) => {
            # Start #
            <$header text={text}>
                # content #
                if (message) {
                    # Message: {message} {text} #
                }
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", message: "Message" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info :::: #
                <div::E5>
                    #::T7 content #
                    #::T4 Message: Message Info #
                </div>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info2", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info2 :::: # (1)
                <div::E5>
                    #::T7 content #
                </div>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (2)
                <div::E5>
                    #::T7 content #
                    #::T4 Message: Message3 Info3 # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info4 :::: # (3)
                <div::E5>
                    #::T7 content #
                </div>
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info3", message: "Message3" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (4)
                <div::E5>
                    #::T7 content #
                    #::T4 Message: Message3 Info3 # (1)
                </div>
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info3", message: "" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info3 :::: # (4)
                <div::E5>
                    #::T7 content #
                </div>
                //::C2 template anchor
            </body>
        `, '6');

        t.refresh({ text: "Info7", message: "Message7" });
        assert.equal(stringify(t), `
            <body::E1>
                #::T3 Start #
                #::T6 :::: Info7 :::: # (5)
                <div::E5>
                    #::T7 content #
                    #::T4 Message: Message7 Info7 # (2)
                </div>
                //::C2 template anchor
            </body>
        `, '7');
    });

    it("should support conditions in components (projection host: fragment / init false)", function () {
        let tpl = template(`(text, open, message) => {
            <$section2 open={open} text={text}>
                # content #
                # Message: {message} {text} #
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", open: false, message: "Hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (closed) :::: #
                </section>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info", open: true, message: "Hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (1)
                    #::T5 content #
                    #::T6 Message: Hello Info #
                </section>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info", open: true, message: "Hello2" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (1)
                    #::T5 content #
                    #::T6 Message: Hello2 Info # (1)
                </section>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", open: false, message: "Hello4" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info4 (closed) :::: # (2)
                </section>
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info", open: true, message: "Hello2" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (3)
                    #::T5 content #
                    #::T6 Message: Hello2 Info # (1)
                </section>
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info6", open: true, message: "Hello2" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info6 (open) :::: # (4)
                    #::T5 content #
                    #::T6 Message: Hello2 Info6 # (2)
                </section>
                //::C2 template anchor
            </body>
        `, '6');
    });

    it("should support conditions in components (projection host: fragment / init true)", function () {
        let tpl = template(`(text, open, message) => {
            <$section2 open={open} text={text}>
                # content #
                # Message: {message} {text} #
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", open: true, message: "Hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: #
                    #::T5 content #
                    #::T6 Message: Hello Info #
                </section>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info", open: false, message: "Hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (closed) :::: # (1)
                </section>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info", open: true, message: "Hello2" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (2)
                    #::T5 content #
                    #::T6 Message: Hello2 Info # (1)
                </section>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", open: false, message: "Hello4" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info4 (closed) :::: # (3)
                </section>
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info", open: true, message: "Hello2" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (4)
                    #::T5 content #
                    #::T6 Message: Hello2 Info # (1)
                </section>
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info6", open: true, message: "Hello2" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info6 (open) :::: # (5)
                    #::T5 content #
                    #::T6 Message: Hello2 Info6 # (2)
                </section>
                //::C2 template anchor
            </body>
        `, '6');
    });

    it("should support conditions in components (projection host: div / init false)", function () {
        let tpl = template(`(text, open, message) => {
            <$section open={open} text={text}>
                # content #
                # Message: {message} {text} #
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", open: false, message: "Hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (closed) :::: #
                </section>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info", open: true, message: "Hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (1)
                    <div::E5>
                        #::T6 content #
                        #::T7 Message: Hello Info #
                    </div>
                </section>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info", open: true, message: "Hello3" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (1)
                    <div::E5>
                        #::T6 content #
                        #::T7 Message: Hello3 Info # (1)
                    </div>
                </section>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", open: false, message: "Hello4" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info4 (closed) :::: # (2)
                </section>
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info", open: true, message: "Hello3" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (3)
                    <div::E5>
                        #::T6 content #
                        #::T7 Message: Hello3 Info # (1)
                    </div>
                </section>
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info6", open: true, message: "Hello3" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info6 (open) :::: # (4)
                    <div::E5>
                        #::T6 content #
                        #::T7 Message: Hello3 Info6 # (2)
                    </div>
                </section>
                //::C2 template anchor
            </body>
        `, '6');
    });

    it("should support conditions in components (projection host: div / init true)", function () {
        let tpl = template(`(text, open, message) => {
            <$section open={open} text={text}>
                # content #
                # Message: {message} {text} #
            </>
        }`);

        let t = getTemplate(tpl, body).refresh({ text: "Info", open: true, message: "Hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: #
                    <div::E5>
                        #::T6 content #
                        #::T7 Message: Hello Info #
                    </div>
                </section>
                //::C2 template anchor
            </body>
        `, '1');

        t.refresh({ text: "Info", open: false, message: "Hello" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (closed) :::: # (1)
                </section>
                //::C2 template anchor
            </body>
        `, '2');

        t.refresh({ text: "Info", open: true, message: "Hello3" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (2)
                    <div::E5>
                        #::T6 content #
                        #::T7 Message: Hello3 Info # (1)
                    </div>
                </section>
                //::C2 template anchor
            </body>
        `, '3');

        t.refresh({ text: "Info4", open: false, message: "Hello4" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info4 (closed) :::: # (3)
                </section>
                //::C2 template anchor
            </body>
        `, '4');

        t.refresh({ text: "Info", open: true, message: "Hello3" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info (open) :::: # (4)
                    <div::E5>
                        #::T6 content #
                        #::T7 Message: Hello3 Info # (1)
                    </div>
                </section>
                //::C2 template anchor
            </body>
        `, '5');

        t.refresh({ text: "Info6", open: true, message: "Hello3" });
        assert.equal(stringify(t), `
            <body::E1>
                <section::E3>
                    #::T4 :::: Info6 (open) :::: # (5)
                    <div::E5>
                        #::T6 content #
                        #::T7 Message: Hello3 Info6 # (2)
                    </div>
                </section>
                //::C2 template anchor
            </body>
        `, '6');
    });
    
    // conditional content
    // todo ζo in deferred content
    // force template refresh if content changed (cf. last Refresh?) -> cf. instructions (no instruction = no refresh!)
    // todo: $content projected in 2 different placeholders depending on condition
    // content projected twice -> error

});