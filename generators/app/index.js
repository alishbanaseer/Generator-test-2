var Generator = require('yeoman-generator');
// Given destination root is ~/projects

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, {
      type    : 'confirm',
      name    : 'cool',
      message : 'Would you like to enable the Cool feature?'

    }]);
    this.answers = await this.prompt([{
      type    : 'input',
      name    : 'number',
      message : 'Your project number',
      store   : true
    }]);

    this.log('app name', answers.name);
    this.log('cool feature', answers.cool);
    this.prompt({
      type    : 'input',
      name    : 'username',
      message : 'What\'s your GitHub username',
      store   : true
    });


  }
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

  }
  paths() {
    this.sourceRoot();
    // returns './templates'

    this.templatePath('index.js');
    // returns './templates/index.js'
  }
  paths() {
    this.destinationRoot();
    // returns '~/projects'

    this.destinationPath('index.js');
    // returns '~/projects/index.js'
  }
    writing(number) {
      this.fs.copyTpl(
        this.templatePath('tutorialpage$number.html.mytemplate'),
        this.destinationPath('tutorialpages<%= number %>/tutorialpage<%= number %>.html'),
        { number: this.answers.number } // user answer `number` used

      
      );
      this.fs.copyTpl(
        this.templatePath('tutorialpage$number.ts.mytemplate'),
        this.destinationPath('tutorialpages<%= number %>/tutorialpage<%= number %>.ts'),
        { number: this.answers.number } // user answer `number` used
      );

      this.fs.copyTpl(
        this.templatePath('tutorial$number.module.ts.mytemplate'),
        this.destinationPath('tutorialpages<%= number %>/tutorial<%= number %>.module.ts'),
        { number: this.answers.number } // user answer `number` used
      );

      this.fs.copyTpl(
        this.templatePath('tutorialpage$number.less.mytemplate'),
        this.destinationPath('tutorialpages<%= number %>/tutorialpage<%= number %>.less'),
        { number: this.answers.number } // user answer `number` used
      );
    }
  
};
