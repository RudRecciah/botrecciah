"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _discord = _interopRequireDefault(require("discord.js"));

var _readline = _interopRequireDefault(require("readline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, null, [{
    key: "main",
    value: function () {
      var _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var client;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //load config
                this.config = null;
                _context.next = 3;
                return _fsExtra["default"].pathExists("../../data/config.json");

              case 3:
                if (!_context.sent) {
                  _context.next = 7;
                  break;
                }

                this.config = require("../../data/config.json");
                _context.next = 8;
                break;

              case 7:
                this.config = require("../resources/config.json");

              case 8:
                //setup bot
                client = new _discord["default"].Client();
                client.once("ready", function () {
                  console.log("We have logged in.");
                  console.log("Node.js Application Loaded");

                  _this.cli();
                }); //log in

                _context.next = 12;
                return client.login(this.config.token);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function main() {
        return _main.apply(this, arguments);
      }

      return main;
    }()
  }, {
    key: "cli",
    value: function cli() {
      var _this2 = this;

      //init cli
      var cli = _readline["default"].createInterface({
        input: process.stdin,
        output: process.stdout
      });

      var commands = {
        help: "Lists commands."
      };
      cli.question("", function (command) {
        switch (command) {
          case "help":
            console.log("%cCommands:", "font-weight:bold");
            console.log(commands);
            break;

          default:
            console.log("Unknown command! Use \"help\" for help.");
        }

        cli.close();

        _this2.cli();
      });
    }
  }]);

  return Main;
}();