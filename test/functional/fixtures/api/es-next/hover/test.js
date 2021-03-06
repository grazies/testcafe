var expect = require('chai').expect;

describe('[API] Hover action', function () {
    it('Should run hover over containers', function () {
        return runTests('./testcafe-fixtures/hover-test.js', 'Hover over containers', {
            shouldFail: true,
            only:       'chrome'
        })
            .catch(function (errs) {
                expect(errs[0]).to.contains('Hover on inputs raised');
                expect(errs[0]).to.contains(' >  8 |    await t.hover(\'#container2\');');
            });
    });

    it('Should validate options', function () {
        return runTests('./testcafe-fixtures/hover-test.js', 'Incorrect action option', {
            shouldFail: true,
            only:       'chrome'
        })
            .catch(function (errs) {
                expect(errs[0]).to.contains('The "offsetX" option is expected to be a positive integer, but it was NaN.');
                expect(errs[0]).to.contains(' > 16 |    await t.hover(\'#container1\', { offsetX: NaN });');
            });
    });

    it('Should validate selector', function () {
        return runTests('./testcafe-fixtures/hover-test.js', 'Incorrect action selector', {
            shouldFail: true,
            only:       'chrome'
        })
            .catch(function (errs) {
                expect(errs[0]).to.contains(
                    'Action "selector" argument error:  Selector is expected to be initialized with a ' +
                    'function, CSS selector string, another Selector, node snapshot or a Promise returned ' +
                    'by a Selector, but undefined was passed.'
                );
                expect(errs[0]).to.contains(' > 12 |    await t.hover(void 0);');
            });
    });
});
