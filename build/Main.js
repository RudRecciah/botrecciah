"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _discord = _interopRequireDefault(require("discord.js"));

var _Utils = _interopRequireDefault(require("./Utils.js"));

var _InfoCommand = _interopRequireDefault(require("./info/InfoCommand.js"));

var _RulesCommand = _interopRequireDefault(require("./rules/RulesCommand.js"));

var _OopTrigger = _interopRequireDefault(require("./oop/OopTrigger.js"));

var _WebCommand = _interopRequireDefault(require("./web/WebCommand.js"));

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
      var _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this = this;

        var client;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //load config
                this.config = null;
                this.dev = false;
                _context2.next = 4;
                return _fsExtra["default"].pathExists("../../data/config.json");

              case 4:
                if (!_context2.sent) {
                  _context2.next = 8;
                  break;
                }

                this.config = require("../../data/config.json");
                _context2.next = 10;
                break;

              case 8:
                this.config = require("../resources/config.json");
                this.dev = true;

              case 10:
                //setup bot
                client = new _discord["default"].Client({
                  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"]
                });
                client.once("ready", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log("We have logged in.");

                          if (_this.dev) {
                            _Utils["default"].sendEmbed(client, "822194899469860867", "This is a random message", "that I send when authenticated.");
                          } //set status


                          _context.next = 4;
                          return client.user.setActivity("over ServerRecciah", {
                            type: "WATCHING"
                          });

                        case 4:
                          _context.next = 6;
                          return new _InfoCommand["default"](client).init();

                        case 6:
                          _context.next = 8;
                          return new _RulesCommand["default"](client).init();

                        case 8:
                          _context.next = 10;
                          return new _OopTrigger["default"](client).init();

                        case 10:
                          _context.next = 12;
                          return new _WebCommand["default"](client).init();

                        case 12:
                          //run cli
                          _Utils["default"].cli(client); //log load message for pterodactyl


                          console.log("Node.js Application Loaded");

                        case 14:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))); //log in

                _context2.next = 14;
                return client.login(this.config.token);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function main() {
        return _main.apply(this, arguments);
      }

      return main;
    }()
  }]);

  return Main;
}();