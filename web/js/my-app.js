(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      hawk: Kotlin.definePackage(null, /** @lends _.com.hawk */ {
        main: function (args) {
          var tmp$0, tmp$1;
          var tmp$4, tmp$3, tmp$2;
          tmp$4 = args, tmp$3 = tmp$4.length;
          for (var tmp$2 = 0; tmp$2 !== tmp$3; ++tmp$2) {
            var element = tmp$4[tmp$2];
            console.log('Arg: ' + element);
          }
          var list = Kotlin.modules['stdlib'].kotlin.listOf_9mqe4v$([1, 2, 3, 6, 7, 9, 22]);
          var destination = new Kotlin.ArrayList();
          var tmp$5;
          tmp$5 = list.iterator();
          while (tmp$5.hasNext()) {
            var element_0 = tmp$5.next();
            if (element_0 % 2 === 0) {
              destination.add_za3rmp$(element_0);
            }
          }
          var destination_0 = new Kotlin.ArrayList(Kotlin.modules['stdlib'].kotlin.collectionSizeOrDefault_pjxt3m$(destination, 10));
          var tmp$6;
          tmp$6 = destination.iterator();
          while (tmp$6.hasNext()) {
            var item = tmp$6.next();
            destination_0.add_za3rmp$(item * 2);
          }
          console.log(destination_0.toString());
          console.log('Email : ' + Kotlin.toString(document.getElementById('email')));
          var $receiver = Kotlin.modules['stdlib'].org.w3c.dom.asList_sg7yuw$(document.getElementsByTagName('input'));
          var tmp$7;
          tmp$7 = $receiver.iterator();
          while (tmp$7.hasNext()) {
            var element_1 = tmp$7.next();
            console.log(' ID: ' + Kotlin.toString(element_1.getAttribute('id')));
          }
          (tmp$0 = document.getElementById('email')) != null ? tmp$0.setAttribute('value', 'hello@kotlinlang.org') : null;
          (tmp$1 = document.getElementById('name')) != null ? tmp$1.setAttribute('value', 'Kotlin JS Demo') : null;
          _.com.hawk.jsInterOp();
        },
        jsInterOp: function () {
          var tmp$0, tmp$1;
          console.log('JS inling from kotlin');
          var ies = document.getElementsByTagName('input');
          console.log('Found ' + ies.length + ' input elements.');
          tmp$1 = ((tmp$0 = ies.length) != null ? tmp$0 : Kotlin.throwNPE()) - 1;
          for (var i = 0; i <= tmp$1; i++) {
            console.log('InputElement-' + i + ' : ' + ies[i].id);
          }
        },
        c2f: function (self) {
          var tmp$0;
          console.log('Self object: ' + self + ' ');
          var text = (tmp$0 = document.getElementById('celcius')) != null ? tmp$0 : Kotlin.throwNPE();
          var celsius = Kotlin.safeParseDouble(text.value);
          if (celsius == null) {
            window.alert('Please give valid input!!!');
            return;
          }
          var fahrenheit = celsius * 1.8 + 32;
          console.log('Fahrenheit value: ' + fahrenheit + ' ');
          window.alert('Celcius (' + Kotlin.toString(celsius) + ') -> Fahrenheit (' + fahrenheit + ') ');
        }
      })
    })
  });
  Kotlin.defineModule('myapp', _);
  _.com.hawk.main([]);
}(Kotlin));
