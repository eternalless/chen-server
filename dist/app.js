'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls: ["[[", "]]"],
    writeBody: false
}));
(0, _controllers2.default)(app, _koaSimpleRouter2.default);
app.use((0, _koaStatic2.default)(_config2.default.staticDir));
console.log(_config2.default);
app.listen(_config2.default.port, () => {
    console.log(`success listening on ${_config2.default.port}`);
});