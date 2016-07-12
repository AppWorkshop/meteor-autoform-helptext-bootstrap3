
 
Template.afFormGroup_materialize_withHelp.helpers({
  getHelp(fieldName) {
    // figure out which schema we're using
    var cover = Session.get("cover");
    var schema = JutoSchemas[cover];
    // get the schema def for our fieldName
    var schemaDef = schema.getDefinition(fieldName);
    if (schemaDef.autoform) {
      return schemaDef.autoform.help;
    }
    return;
  }

});

 
Template.afFormGroup_materialize_withHelp.events({
  'click .foo'(event) { console.log('foo clicked'); },
});

 
//called before your template’s logic is evaluated for the first time
Template.afFormGroup_materialize_withHelp.onCreated(function () {
  // set up values on template instance that are read from template helpers using Template.instance().
  // use 'this' to access the template instance. 
});

 
//called once when an instance of Template.myTemplate is rendered into DOM nodes and put into the document for the first time
Template.afFormGroup_materialize_withHelp.onRendered(function () {
  // This can be a good place to apply any DOM manipulations you want, after the template is rendered for the first time.
  // use 'this' to access the template instance. 
});

 
//an occurrence of a template is taken off the page for any reason and not replaced with a re-rendering.
Template.afFormGroup_materialize_withHelp.onDestroyed(function () {
  // use 'this' to access the template instance. 
});

Template.afFormGroup_materialize_withHelp.replaces("afFormGroup_materialize");
Template.afFormGroup_materialize.inheritsHelpersFrom("afFormGroup_materialize_withHelp");

