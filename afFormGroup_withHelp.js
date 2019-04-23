

Template.afFormGroup_withHelp.helpers({
  getHelp(fieldName) {
    var schemaDef = AutoForm.getSchemaForField(fieldName);
    if (schemaDef.autoform) {
      return schemaDef.autoform.help;
    }
    return "";
  }

});

Template.afFormGroup_withHelp.replaces("afFormGroup_bootstrap3");
Template.afFormGroup_bootstrap3.inheritsHelpersFrom("afFormGroup_withHelp");

