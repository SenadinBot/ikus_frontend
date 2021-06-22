# Bootstrap Theming
Extended Bootstrap theming package with predefined Sass variables, helpers, and a template starter page.

### Start
<ol>
    <li>Install packages with npm install</li>
    <li>Start project with npm run gulp-watch</li>
</ol>

### Documentation
For customizing, theming & component features read more on <a href="https://getbootstrap.com/docs/5.0/customize" target="_blank">Bootstrap documentation</a>. This package works only with <b>Bootstrap 5</b> version! Now, theming is accomplished by Sass variables, Sass maps, and custom CSS. There’s no more dedicated theme stylesheet; instead, you can enable the built-in theme to add gradients, shadows, and more.

### File structure
Whenever possible, avoid modifying Bootstrap’s core files. For Sass, that means creating your own stylesheet that imports Bootstrap so you can modify and extend it. Assuming you’re using a package manager like npm, you’ll have a file structure that looks like this:

<pre>
    project/
    ├── scss
    │   └── components/
    │   └── defaults/
    │   └── helpers/
    │   └── _components.scss
    │   └── _defaults.scss
    │   └── _helpers_.scss
    │   └── _optional_.scss
    │   └── _required_.scss
    │   └── _variables_.scss
    │   └── style.scss
    └── node_modules/
        └── bootstrap
            ├── js
            └── scss
</pre>

### Exending project
Every Sass variable in Bootstrap includes the !default flag allowing you to override the variable’s default value in your own Sass without modifying Bootstrap’s source code. Copy and paste variables as needed, modify their values, and remove the !default flag. If a variable has already been assigned, then it won’t be re-assigned by the default values in Bootstrap.
<pre>
node_modules/bootstrap/scss/_variables.scss
</pre>

Copy and paste variables as needed, modify their values, and remove the !default flag and move them to:
<pre>
scss/_varibales.scss
</pre>

Here’s an example that changes the background-color and color for the <body> when importing and compiling Bootstrap via npm:
<pre>
$body-bg:       #000;
$body-color:    #111;
</pre>
