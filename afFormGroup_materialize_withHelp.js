
 
Template.afFormGroup_materialize_withHelp.helpers({
  getHelp(fieldName) {
    var schemaDef = AutoForm.getSchemaForField(fieldName);
    if (schemaDef.autoform) {
      return schemaDef.autoform.help;
    }
    return "";
  }

});

Template.afFormGroup_materialize_withHelp.replaces("afFormGroup_materialize");
Template.afFormGroup_materialize.inheritsHelpersFrom("afFormGroup_materialize_withHelp");

