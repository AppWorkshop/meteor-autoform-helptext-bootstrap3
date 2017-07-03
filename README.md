Extends [mozfet:autoform-materialize](https://github.com/mozfet/meteor-autoform-materialize) to allow help text to be
defined in the schema.

It works by using [aldeed:template-extension]() to override the
[afFormGroup_materialize](https://github.com/mozfet/meteor-autoform-materialize/blob/master/components/afFormGroup/afFormGroup.html) template.

### Installation

    meteor add appworkshop:autoform-materialize-helptext

### Usage

1. Define your help text in the schema as an ```autoform.help```
property of the schema item e.g.

    ```js
    var mySchema = new SimpleSchema({
      "Test":{
        type: "String",
        autoform: {
          help: "This is the help text"
        }
      }
    });
    ```

2. [optional] Override or apply styles to the ```form-field-help``` class.

    ```css
    span.form-field-help {
      color: @secondary;
      font-size: 0.8rem;
      margin-top: -15px;
      display: block;
      margin-left: 1em;
    }

    ```