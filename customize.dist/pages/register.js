define([
    '/api/config',
    'jquery',
    '/common/hyperscript.js',
    '/common/common-interface.js',
    '/customize/messages.js',
    '/customize/pages.js'
], function (Config, $, h, UI, Msg, Pages) {
    return function () {
        var urlArgs = Config.requireConf.urlArgs;

        return [h('div#cp-main', [
            Pages.infopageTopbar(),
            h('div.container.cp-container', [
                h('div.row.cp-page-title', h('h1', Msg.register_header)),
                h('div.row.cp-register-det', [
                h('div#data.hidden.col-md-6', [
                    h('h2', Msg.register_notes_title),
                    Pages.setHTML(h('div.cp-register-notes'), Msg.register_notes)
                ]),
                h('div.cp-reg-form.col-md-6', [
                    h('img.img-fluid', {
                        src: '/customize/images/swallow-the-key.png?' + urlArgs
                    }),
                    h('div#userForm.form-group.hidden', [
                        h('a', {
                            href: '/features.html'
                        }, Msg.register_whyRegister),
                        h('input.form-control#username', {
                            type: 'text',
                            autocomplete: 'off',
                            autocorrect: 'off',
                            autocapitalize: 'off',
                            spellcheck: false,
                            placeholder: Msg.login_username,
                            autofocus: true,
                        }),
                        h('input.form-control#password', {
                            type: 'password',
                            placeholder: Msg.login_password,
                        }),
                        h('input.form-control#password-confirm', {
                            type: 'password',
                            placeholder: Msg.login_confirm,
                        }),
                        h('div.checkbox-container', [
                            UI.createCheckbox('import-recent', Msg.register_importRecent, true)
                        ]),
                        h('div.checkbox-container', [
                            $(UI.createCheckbox('accept-terms')).find('.cp-checkmark-label').append(Msg.register_acceptTerms).parent()[0]
                        ]),
                        h('button#register', Msg.login_register)
                    ])
                ]),
                ]),
            ]),

            Pages.infopageFooter(),
        ])];
    };

});

