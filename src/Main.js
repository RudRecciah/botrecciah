import "core-js/stable";
import "regenerator-runtime/runtime";

module.exports = class Main {
  
  static async main() {
    this.Discord = require("discord.js");
    this.Config = require("../resources/config.json");
    //init bot
    const client = new this.Discord.Client();
    client.once("ready", () => {
      console.log("We have logged in.");
      console.log("Node.js Application Loaded");
      this.cli();
    });
    await client.login(this.Config.token);
  }

  static cli() {

    const readline = require("readline");

    const questions = [
      ["Can the fox be recursive?", "O_o"],
      ["Can readline be non-recursive?", "Yep"]
    ];

    const cmd = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    function askQuestion() {
      if(!questions.length) {
        return cmd.close();
      }
      cmd.output.write(`${questions[0][0]} `);
      cmd.resume();
    }

    function checkAnswer(answer) {
      if(answer === questions[0][1]) {
        cmd.output.write("Correct!\n");
      }else{
        cmd.output.write("Wrong!\n");
      }
      questions.shift();
      cmd.pause();
    }

    cmd.on("pause", askQuestion);

    cmd.on("line", checkAnswer);

    askQuestion();
  }

};