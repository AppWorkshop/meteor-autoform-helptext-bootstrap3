Extends [aldeed:autoform](https://github.com/aldeed/meteor-autoform) to allow help text to be
defined in the schema.

    ```json
        autoform: {
          help: "This is the help text"
        }
    ```

becomes:

![autoform_help_text](https://user-images.githubusercontent.com/1751645/56561722-5aabdf80-65da-11e9-959e-09cfd730581b.png)

It works by using [aldeed:template-extension]() to override the
[afFormGroup_bootstrap3](https://github.com/aldeed/meteor-autoform/blob/devel/templates/bootstrap3/components/afFormGroup/afFormGroup.html) template.

### Installation

    meteor add appworkshop:autoform-helptext-bootstrap3

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
      /*color: @secondary;*/
      font-size: 0.8em;
      margin-top: -0.5em;
      display: block;
      margin-left: 1em;
    }

    ```
