var global=global||this
global.Smalltalk=global.Smalltalk||(function Smalltalk(){});
Object.defineProperty(Object.prototype,"$def",{value:
 function $def(aFunc){
  Object.defineProperty(this,aFunc.name,{writable:true,value:aFunc})}})
Object.defineProperty(Object.prototype,"$$def",{value:
 function $$def(){
   var v=Array.from(arguments),f=v[0];
   v[0]=this
    v=Array.from(v,function(x){if(!x.classPool)x.classPool={};return x.classPool})
   v.unshift(this.$def.bind(this.prototype),this.$def.bind(this.__proto__));
   f.apply(null,v)}})
var require
global.Smalltalk.require=require
function PjClass(){};
Smalltalk.theClassClass=PjClass;
Smalltalk.$$def(function(i$,c$){
c$(function pj_at_(jsName){return global[jsName]});
c$(function pj_at_ifAbsent_(key,aBlock){return $asNil$(global).pj_at_ifAbsent_(key,aBlock)});
c$(function pj_at_ifAbsentPut_(aKey,aBlock){return $asNil$(global).pj_at_ifAbsentPut_(aKey,aBlock)});
c$(function pj_at_ifPresent_(key,aBlock){return $asNil$(global).pj_at_ifPresent_(key,aBlock)});
c$(function pj_at_put_(jsName,anObject){return global[jsName]=anObject});
c$(function pj_emptyJavascriptObject(){return {}});
c$(function pj_handleDNU_for_(aMessage,anObject){var selector,$_self_$=this;selector=(($asNil$(aMessage).pj_selector()).split(":"))[0];return this.pj_installDnuArgs_selector_js_for_else_($asNil$(aMessage).pj_arguments(),selector,this.pj_makePharoJsSelector_($asNil$(aMessage).pj_selector()),anObject,function(){return $_self_$.pj_error_("Message not understood: "+$asNil$(anObject).pj_className()+">>#"+$asNil$(aMessage).pj_selector())})});
c$(function pj_initNilInJs(){global[(this.pj_nilTestFunctionName())]=this.pj_nilIfUndefined();return this});
c$(function pj_initObject(){Object.__proto__[(this.pj_subclassSelector())]=this.pj_makeSubclass();this.theClassClass.prototype.__proto__=Function.prototype;return this});
c$(function pj_initThrowInJs(){global[(this.pj_throwFunctionName())]=this.pj_throwFunction();return this});
c$(function pj_initializeCore(){this.selectorCache=this.pj_emptyJavascriptObject();this.pj_initNilInJs();this.pj_initThrowInJs();this.pj_initObject();this.pj_messageClass_(this);this.pj_metaclassClass_(this);return this});
c$(function pj_installDnuArgs_selector_js_for_else_(args,selector,jsSelector,anObject,aBlock){var type,func,functionName;if((type=anObject[selector])!=undefined)if(true==this.pj_isFunction_(type)){functionName=type.name;if(""==functionName)type=2;else if(true==$asNil$($asNil$(functionName).pj_asCharacter()).pj_61_($asNil$($asNil$(functionName).pj_asCharacter()).pj_capitalized()))type=0;else type=2}else type=args.length;if(2>type){if(0==type)func=this.pj_makeGetter_(selector);else func=this.pj_makeSetter_(selector);Object.defineProperty(anObject.__proto__,jsSelector,this.pj_propertySet_(func));return func.apply(anObject,args)}else {type=anObject;while(true==$asNil$(type).pj_notNil()){if(true==(true==type.hasOwnProperty(selector)&&"function"==$asNil$(type[selector]).pj_typeof())){func=type[selector];Object.defineProperty(type,jsSelector,this.pj_propertySet_(func));return func.apply(anObject,args)}type=$asNil$(type).pj_instVarNamed_("__proto__")}}return $asNil$(aBlock).pj_value()});
c$(function pj_isBrowserPlatform(){return $asNil$(this.pj_at_("navigator")).pj_isNotNil()});
c$(function pj_isDomPlatform(){return $asNil$(this.pj_at_("document")).pj_isNotNil()});
c$(function pj_isFunction_(type){return "function" == typeof type});
c$(function pj_isNodePlatform(){return $asNil$(this.pj_at_("navigator")).pj_isNil()});
c$(function pj_isPharoJsSelector_(aSelector){var prefixSize;prefixSize=$asNil$(this.pj_pharoJsSelectorPrefix()).pj_size();if($asNil$(aSelector).pj_size()<=prefixSize)return false;return $asNil$(aSelector.substring(0,prefixSize)).pj_61_(this.pj_pharoJsSelectorPrefix())});
c$(function pj_keys_(anObject){var result={};
for (var i in anObject) { if(typeof anObject[i]!="function" && anObject[i]!=null && anObject[i].pj_proxyResponse) result[i]=anObject[i].pj_proxyResponse()}
return {pj_proxyResponse:function(){return {keys:result}}}});
c$(function pj_log_(message){console.log(message);return this});
c$(function pj_makeDNU_(aSelector){var pjCore=this,ss=this.pj_makeSmalltalkSelector_(aSelector);
switch (ss.split(":").length) {
case 1: return function __DNU(){
return this.pj_doesNotUnderstand_(pjCore.pj_selector_arguments_(ss,[]))};
case 2: return function __DNU(arg1) {
return this.pj_doesNotUnderstand_(pjCore.pj_selector_arguments_(ss,[arg1]))};
case 3: return function __DNU(arg1,arg2) {
return this.pj_doesNotUnderstand_(pjCore.pj_selector_arguments_(ss,[arg1,arg2]))};
default: return function __DNU() {
var args=new Array(arguments.length);
for(var i=0;i<arguments.length;++i) args[i]=arguments[i]
return this.pj_doesNotUnderstand_(pjCore.pj_selector_arguments_(ss,args))};
}});
c$(function pj_makeGetter_(selector){return function Getter(){return this[selector]}});
c$(function pj_makePharoJsSelector_(aSelector){var result;if(true==this.pj_isPharoJsSelector_(aSelector))return aSelector;if(true==this.selectorCache.hasOwnProperty(aSelector))return this.selectorCache[aSelector];if((sel=aSelector)!=undefined){if(true==(true==$asNil$(sel).pj_isLetter()||aSelector[0]=="$"))result=sel.split(":");else {result=[];(1).pj_to_do_($asNil$(sel).pj_size(),function(idx){return result.push((sel.charCodeAt(idx-1)).toString())});result.push(undefined)}result=$asNil$(this.pj_pharoJsSelectorPrefix()).pj_44_(result.join("_"))}if(this.selectorCache[result]==undefined)this.selectorCache[result]=aSelector;if(this.selectorCache[aSelector]==undefined)this.selectorCache[aSelector]=result;return result});
c$(function pj_makeSetter_(selector){return function Setter(value){return this[selector]=value}});
c$(function pj_makeSmalltalkSelector_(aSelector){var result;if(false==this.pj_isPharoJsSelector_(aSelector))return aSelector;if(true==this.selectorCache.hasOwnProperty(aSelector))return this.selectorCache[aSelector];result=aSelector.split("_");result.shift();if(result[0][0]>"9")return result.join(":");result.pop();(0).pj_to_do_(result.length-1,function(index){return result[index]=String.pj_value_(result[index])});result=result.join("");if(this.selectorCache[result]==undefined)this.selectorCache[result]=aSelector;if(this.selectorCache[aSelector]==undefined)this.selectorCache[aSelector]=result;return result});
c$(function pj_makeSubclass(){var pjCore=this;
return function(subclassName){
var subclass = (function(){
if(this[subclassName]) 
return this[subclassName];
var newClass = (new Function("return function "+subclassName+"(){}"))();
newClass.name = subclassName;
return this[subclassName] = newClass;
})();
if(subclass.__proto__.__proto__ == this.__proto__){return;}
subclass.subclasses = [];
if(subclass == this) {
this.__proto__ = {__proto__ : pjCore.theClassClass.prototype};
}else{
subclass.__proto__ = {__proto__ : this.__proto__};
subclass.prototype.__proto__ = this.prototype;
this.subclasses.push(subclass);
}
}});
c$(function pj_messageClass_(anObject){this.messageClass=anObject;return this});
c$(function pj_metaclassClass_(anObject){this.metaclassClass=anObject;return this});
c$(function pj_metaclassOf_(aClass){if(this.metaclassClass!==this) return this.metaclassClass.pj_metaclassOf_(aClass);
var theMetaClass={ prototype: aClass.__proto__,__proto__:this.theClassClass.prototype,
pj_name: function(){return aClass.pj_name()+" class"},
pj_theNonMetaClass: function(){return aClass},
pj_theMetaClass: function(){return theMetaClass},
};
return theMetaClass});
c$(function pj_nilIfUndefined(){var pjCore=this;return function(arg){if(arg == undefined){
return pjCore.nilInJs;
}
return arg}});
c$(function pj_nilInJs_(anObject){this.nilInJs=anObject;return this});
c$(function pj_nilTestFunctionName(){return "$asNil$"});
c$(function pj_pharoJsSelectorPrefix(){return "pj_"});
c$(function pj_propertySet_(func){return {
enumerable: false,
configurable: false,
writable: true,
value: func}});
c$(function pj_registerDnu_(aSelector){var selector,props;selector=this.pj_makePharoJsSelector_(aSelector);if(Object.prototype[selector]==undefined){props=this.pj_makeDNU_(aSelector);Object.defineProperty(Object.prototype,selector,this.pj_propertySet_(props))}return selector});
c$(function pj_registerDnuForAll_(anArray){var $_self_$=this;anArray.forEach(function(each){return $_self_$.pj_registerDnu_(each)});return this});
c$(function pj_selector_arguments_(selector,args){if(this.messageClass!==this)
return this.messageClass.pj_selector_arguments_(selector,arguments);
return {
selector: selector,
pj_selector: function(){return this.selector},
arguments: args,
pj_arguments: function(){return this.arguments}
}});
c$(function pj_subclassSelector(){return "pj_subclass_"});
c$(function pj_throwFunction(){return function(arg){throw arg}});
c$(function pj_throwFunctionName(){return "$throw$"});
})
Smalltalk.pj_initializeCore();
Object.pj_subclass_("Object");
Object.$$def(function(i$,c$,cp$){
i$(function pj_45_62_(anObject){return $asNil$(PjAssociation.pj_basicNew()).pj_key_value_(this,anObject)});
i$(function pj_61_(other){return this==other});
i$(function pj_61_61_(other){return this===other});
i$(function pj_add_(assoc){var $_self_$=this;return Smalltalk.pj_installDnuArgs_selector_js_for_else_([assoc],"add","_add_",this,function(){return $_self_$[($asNil$(assoc).pj_key())]=$asNil$(assoc).pj_value()})});
i$(function pj_addAll_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_add_(each)});return aCollection});
i$(function pj_allEnumeratableKeys(){var allKeys;allKeys=PjSet.pj_new();this.pj_allEnumeratableKeysDo_(function(each){return $asNil$(allKeys).pj_add_(each)});return allKeys});
i$(function pj_allEnumeratableKeysDo_(aBlock){for (var i in this){aBlock.pj_value_(i)};
return this;});
i$(function pj_as_(aSimilarClass){return $asNil$(aSimilarClass).pj_newFrom_(this)});
i$(function pj_asJSON(){return $asNil$(JSON).pj_stringify_(this.pj_value())});
i$(function pj_asJsObject(){return this});
i$(function pj_asOrderedCollection(){return Array.pj_with_(this)});
i$(function pj_associationsDo_(aBlock){this.pj_keysAndValuesDo_(function(key,value){return $asNil$(aBlock).pj_value_(PjAssociation.pj_key_value_(key,value))});return this});
i$(function pj_at_(key){return this[key]});
i$(function pj_at_ifAbsent_(key,aBlock){if(true==this.hasOwnProperty(key))return this[key];return $asNil$(aBlock).pj_value()});
i$(function pj_at_ifPresent_(key,aBlock){if(false==this.hasOwnProperty(key))return undefined;return $asNil$(aBlock).pj_cull_(this[key])});
i$(function pj_at_ifPresent_ifAbsent_(key,aBlock,anotherBlock){if(true==this.hasOwnProperty(key))return $asNil$(aBlock).pj_cull_(this[key]);return $asNil$(anotherBlock).pj_value()});
i$(function pj_at_put_(key,value){return this[key]=value});
i$(function pj_class(){return this.constructor});
i$(function pj_className(){return $asNil$($asNil$(this.pj_class()).pj_name()).pj_asString()});
i$(function pj_copy(){return $asNil$(this.pj_shallowCopy()).pj_postCopy()});
i$(function pj_do_(aBlock){return this.pj_valuesDo_(aBlock)});
i$(function pj_doesNotUnderstand_(aMessage){return Smalltalk.pj_handleDNU_for_(aMessage,this)});
i$(function pj_error_(aString){return $asNil$(Error.pj_new()).pj_signal_(aString)});
i$(function pj_flag_(aSymbol){return this});
i$(function pj_halt(){debugger});
i$(function pj_hash(){return this.pj_identityHash()});
i$(function pj_identityHash(){if(($1=this.pj_instVarNamed_("_js_hash"))==undefined)return this.pj_instVarNamed_putHidden_("_js_hash",$asNil$(this.pj_class()).pj_nextIdentityHash());else return $1});
i$(function pj_ifNil_(nilBlock){return this});
i$(function pj_ifNil_ifNotNil_(nilBlock,ifNotNilBlock){return $asNil$(ifNotNilBlock).pj_cull_(this)});
i$(function pj_ifNotNil_(ifNotNilBlock){return $asNil$(ifNotNilBlock).pj_cull_(this)});
i$(function pj_ifNotNil_ifNil_(ifNotNilBlock,nilBlock){return $asNil$(ifNotNilBlock).pj_cull_(this)});
i$(function pj_includesKey_(key){return this.hasOwnProperty(key)});
i$(function pj_initialize(){return this});
i$(function pj_instVarNamed_(aString){return this[aString]});
i$(function pj_instVarNamed_put_(aString,anObject){return this[aString]=anObject});
i$(function pj_instVarNamed_putHidden_(aString,anObject){try{Object.defineProperty(this,aString,{value:anObject,writable:true})}catch(e){}
return anObject});
i$(function pj_isArray(){return false});
i$(function pj_isBehavior(){return false});
i$(function pj_isBlock(){return false});
i$(function pj_isCharacter(){return false});
i$(function pj_isClass(){return false});
i$(function pj_isCollection(){return false});
i$(function pj_isEmpty(){var $_err_$={};try{this.pj_keysDo_(function(){throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_isFloat(){return false});
i$(function pj_isInteger(){return false});
i$(function pj_isJSPrimitiveType(){return false});
i$(function pj_isKindOf_(aClass){if(this.pj_class()===aClass)return true;else return $asNil$(this.pj_class()).pj_inheritsFrom_(aClass)});
i$(function pj_isMemberOf_(aClass){return this.pj_class()===aClass});
i$(function pj_isNil(){return false});
i$(function pj_isNotNil(){return true});
i$(function pj_isNumber(){return false});
i$(function pj_isPjProxyOrNil(){return false});
i$(function pj_isStream(){return false});
i$(function pj_isString(){return false});
i$(function pj_isSymbol(){return false});
i$(function pj_keys(){var result;result=Array.pj_new();this.pj_keysDo_(function(key){return $asNil$(result).pj_addLast_(key)});return result});
i$(function pj_keysAndValuesDo_(aBlock){for (var i in this){if(this.hasOwnProperty(i))aBlock.pj_value_value_(i,this[i])};
return this;});
i$(function pj_keysDo_(aBlock){for (var i in this){if(this.hasOwnProperty(i))aBlock.pj_value_(i)};
return this;});
i$(function pj_notNil(){return true});
i$(function pj_perform_(selector){return $asNil$(this[(Smalltalk.pj_registerDnu_(selector))]).pj_call_(this)});
i$(function pj_perform_with_(selector,arg){return $asNil$(this[(Smalltalk.pj_registerDnu_(selector))]).pj_call_with_(this,arg)});
i$(function pj_perform_with_with_(selector,arg1,arg2){return $asNil$(this[(Smalltalk.pj_registerDnu_(selector))]).pj_call_with_with_(this,arg1,arg2)});
i$(function pj_perform_with_with_with_(selector,arg1,arg2,arg3){return $asNil$(this[(Smalltalk.pj_registerDnu_(selector))]).pj_call_with_with_with_(this,arg1,arg2,arg3)});
i$(function pj_perform_withArguments_(selector,argArray){return $asNil$(this[(Smalltalk.pj_registerDnu_(selector))]).pj_apply_with_(this,argArray)});
i$(function pj_perform_withArguments_inSuperclass_(selector,argArray,lookupClass){return $asNil$(($asNil$(lookupClass).pj_prototype())[(Smalltalk.pj_registerDnu_(selector))]).pj_apply_with_(this,argArray)});
i$(function pj_postCopy(){return this});
i$(function pj_printString(){var jsResponse;jsResponse=this.toString();if(false==(true==$asNil$(jsResponse).pj_isEmpty()||$asNil$(jsResponse).pj_beginsWith_("[")))return jsResponse;if(true==$asNil$($asNil$(this.pj_className()).pj_first()).pj_isVowel())return "an "+this.pj_className();return "a "+this.pj_className()});
i$(function pj_proxyResponse(){var name = this.$_jsName;
if (!name) {
Object.$Pj_counter = (Object.$Pj_counter||0)+1;
name = "$_"+Object.$Pj_counter;
(function(){return this})()[name]=this;
try{Object.defineProperty(this,"$_jsName",{value:name,writable:true})}catch(e){}
}
return { remove : this.$PjProxyRemove , proxy : name}});
i$(function pj_release(){return this});
i$(function pj_removeKey_(key){var result=this[key];delete this[key];return result});
i$(function pj_respondsTo_(aSymbol){return $asNil$(this.pj_class()).pj_canUnderstand_(aSymbol)});
i$(function pj_serializationArray(){return [this.pj_className(),this.pj_serializationContents()]});
i$(function pj_serializationContents(){var serializable;serializable=Array.pj_new();this.pj_keysAndValuesDo_(function(key,value){$asNil$(serializable).pj_add_(key);return $asNil$(serializable).pj_add_($asNil$(value).pj_serializationArray())});return serializable});
i$(function pj_serialize(){return $asNil$(this.pj_serializationArray()).pj_asJSON()});
i$(function pj_setTimeout_afterMilliseconds_(aBlock,anInteger){window.setTimeout(aBlock, anInteger)});
i$(function pj_shallowCopy(){var copy;copy=$asNil$(this.pj_class()).pj_basicNew();this.pj_keysAndValuesDo_(function(key,value){return $asNil$(copy).pj_instVarNamed_put_(key,value)});return copy});
i$(function pj_size(){var count;count=0;this.pj_keysAndValuesDo_(function(key,value){return count=count+1});return count});
i$(function pj_species(){return this.pj_class()});
i$(function pj_typeof(){return typeof this});
i$(function pj_typeof_(anObject){return typeof anObject});
i$(function pj_value(){var $_self_$=this;return Smalltalk.pj_installDnuArgs_selector_js_for_else_([],"value",$asNil$(Smalltalk.pj_pharoJsSelectorPrefix()).pj_44_("value"),this,function(){return $_self_$})});
i$(function pj_valuesDo_(aBlock){for (var i in this){if(this.hasOwnProperty(i))aBlock.pj_value_(this[i])};
return this;});
i$(function pj_yourself(){return this});
i$(function pj_126_61_(other){return $asNil$((this==other)).pj_not()});
i$(function pj_126_126_(other){return $asNil$((this===other)).pj_not()});
c$(function pj_addDnuSupportFor_(selector){if(Object.prototype[selector] != undefined){return;}
Object.prototype.selector =  function(){
throw "Does not understand message " + selector;};});
c$(function pj_newFrom_(aDict){var newDictionary,$_self_$=this;newDictionary=this.pj_new_($asNil$(aDict).pj_size());$asNil$(aDict).pj_associationsDo_(function(x){if(true==$asNil$(newDictionary).pj_includesKey_($asNil$(x).pj_key()))return $_self_$.pj_error_("Duplicate key: "+$asNil$($asNil$(x).pj_key()).pj_printString());else return $asNil$(newDictionary).pj_add_(x)});return newDictionary});
c$(function pj_newFromMaterialized_(serializationArray){var restored,ivIndex;restored=this.pj_new();ivIndex=1;while(ivIndex<=$asNil$(serializationArray).pj_size()){$asNil$(restored).pj_instVarNamed_put_($asNil$(serializationArray).pj_at_(ivIndex),$asNil$($asNil$(serializationArray).pj_at_(ivIndex+1)).pj_materialize());ivIndex=ivIndex+2}return restored});
c$(function pj_newFromPairs_(anArray){var newDictionary;newDictionary=this.pj_new_($asNil$($asNil$(anArray).pj_size()).pj_47_(2));(1).pj_to_by_do_($asNil$(anArray).pj_size()-1,2,function(i){return $asNil$(newDictionary).pj_at_put_($asNil$(anArray).pj_at_(i),$asNil$(anArray).pj_at_(i+1))});return newDictionary});
c$(function pj_nextIdentityHash(){return this.nextIdentityHash=$asNil$((($1=this.nextIdentityHash)==undefined?12345:$1)).pj_hashMultiply()});
c$(function pj_resultObject_(result){if (result != undefined) return result.pj_proxyResponse();
return null;});
})
Object.pj_subclass_("Margin");
Margin.$$def(function(i$,c$,cp$){
i$(function pj_asMargin(){return this});
i$(function pj_bottom(){return this.bottom});
i$(function pj_expandRectangle_(aRectangle){return PjRectangle.pj_left_right_top_bottom_($asNil$($asNil$(aRectangle).pj_left()).pj_45_(this.pj_left()),$asNil$($asNil$(aRectangle).pj_right()).pj_43_(this.pj_right()),$asNil$($asNil$(aRectangle).pj_top()).pj_45_(this.pj_top()),$asNil$($asNil$(aRectangle).pj_bottom()).pj_43_(this.pj_bottom()))});
i$(function pj_extendRectangle_(aRectangle){return PjRectangle.pj_origin_corner_($asNil$(aRectangle).pj_origin(),$asNil$($asNil$(aRectangle).pj_corner()).pj_43_($asNil$(this.pj_width()).pj_64_(this.pj_height())))});
i$(function pj_fromNumber_(anInteger){this.pj_setTop_left_bottom_right_(anInteger,anInteger,anInteger,anInteger);return this});
i$(function pj_fromPoint_(aPoint){this.pj_setTop_left_bottom_right_($asNil$(aPoint).pj_y(),$asNil$(aPoint).pj_x(),$asNil$(aPoint).pj_y(),$asNil$(aPoint).pj_x());return this});
i$(function pj_fromRectangle_(aRectangle){this.pj_setTop_left_bottom_right_($asNil$(aRectangle).pj_top(),$asNil$(aRectangle).pj_left(),$asNil$(aRectangle).pj_bottom(),$asNil$(aRectangle).pj_right());return this});
i$(function pj_height(){return $asNil$(this.pj_bottom()).pj_43_(this.pj_top())});
i$(function pj_initialize(){Object.prototype.pj_initialize.call(this);this.pj_setTop_left_bottom_right_(0,0,0,0);return this});
i$(function pj_insetRectangle_(aRectangle){var l,r,t,b;l=$asNil$($asNil$(aRectangle).pj_left()).pj_43_(this.pj_left());r=$asNil$(this.left).pj_max_($asNil$($asNil$(aRectangle).pj_right()).pj_45_(this.pj_right()));t=$asNil$($asNil$(aRectangle).pj_top()).pj_43_(this.pj_top());b=$asNil$(this.top).pj_max_($asNil$($asNil$(aRectangle).pj_bottom()).pj_45_(this.pj_bottom()));return PjRectangle.pj_left_right_top_bottom_(l,r,t,b)});
i$(function pj_isZero(){if(0==this.top)if(0==this.left)if(0==this.right)return 0==this.bottom;else return false;else return false;else return false});
i$(function pj_left(){return this.left});
i$(function pj_printOn_(aStream){var $1;Object.prototype.pj_printOn_.call(this,aStream);{$1=$asNil$(aStream);$1.pj_nextPutAll_(" top: ");$1.pj_print_(this.top);$1.pj_nextPutAll_(" left: ");$1.pj_print_(this.left);$1.pj_nextPutAll_(" bottom: ");$1.pj_print_(this.bottom);$1.pj_nextPutAll_(" right: ");$1.pj_print_(this.right)}return this});
i$(function pj_right(){return this.right});
i$(function pj_setTop_left_bottom_right_(topNumber,leftNumber,bottomNumber,rightNumber){this.top=topNumber;this.left=leftNumber;this.bottom=bottomNumber;this.right=rightNumber;return this});
i$(function pj_top(){return this.top});
i$(function pj_width(){return $asNil$(this.pj_right()).pj_43_(this.pj_left())});
c$(function pj_approvedSelectorsForMethodFinder(){return this.pj_selectors()});
c$(function pj_fromNumber_(aNumber){var $1;return ($1=$asNil$(this.pj_new()),$1.pj_fromNumber_(aNumber),$1.pj_yourself())});
c$(function pj_fromPoint_(aPoint){var $1;return ($1=$asNil$(this.pj_new()),$1.pj_fromPoint_(aPoint),$1.pj_yourself())});
c$(function pj_fromRectangle_(aRectangle){var $1;return ($1=$asNil$(this.pj_new()),$1.pj_fromRectangle_(aRectangle),$1.pj_yourself())});
c$(function pj_left_right_top_bottom_(leftNumber,rightNumber,topNumber,bottomNumber){return $asNil$(this.pj_new()).pj_setTop_left_bottom_right_(topNumber,leftNumber,bottomNumber,rightNumber)});
c$(function pj_left_top_right_bottom_(leftNumber,topNumber,rightNumber,bottomNumber){return $asNil$(this.pj_new()).pj_setTop_left_bottom_right_(topNumber,leftNumber,bottomNumber,rightNumber)});
c$(function pj_top_left_bottom_right_(topNumber,leftNumber,bottomNumber,rightNumber){return $asNil$(this.pj_new()).pj_setTop_left_bottom_right_(topNumber,leftNumber,bottomNumber,rightNumber)});
})
Object.pj_subclass_("PjUndefinedObject");
PjUndefinedObject.$$def(function(i$,c$,cp$){
i$(function pj_61_(other){return undefined==other});
i$(function pj_asJSON(){return "null"});
i$(function pj_identityHash(){return 983088384});
i$(function pj_ifNil_(aBlock){return $asNil$(aBlock).pj_value()});
i$(function pj_ifNil_ifNotNil_(nilBlock,ifNotNilBlock){return $asNil$(nilBlock).pj_value()});
i$(function pj_ifNotNil_(aBlock){return this});
i$(function pj_ifNotNil_ifNil_(ifNotNilBlock,nilBlock){return $asNil$(nilBlock).pj_value()});
i$(function pj_isEmptyOrNil(){return true});
i$(function pj_isJSPrimitiveType(){return true});
i$(function pj_isNil(){return true});
i$(function pj_isNotNil(){return false});
i$(function pj_notNil(){return false});
i$(function pj_serializationContents(){return this});
i$(function pj_value(){return undefined});
c$(function pj_javascriptInitialize(){Smalltalk.pj_nilInJs_(this.pj_basicNew());return this});
c$(function pj_new(){return Smalltalk.pj_signal_("cannot create instances of UndefinedObject")});
c$(function pj_newFromMaterialized_(anObject){return undefined});
})
Object.pj_subclass_("Point");
Point.$$def(function(i$,c$,cp$){
i$(function pj_42_(arg){if(true==$asNil$(arg).pj_isPoint())return $asNil$($asNil$(this.x).pj_42_($asNil$(arg).pj_x())).pj_64_($asNil$(this.y).pj_42_($asNil$(arg).pj_y()));return $asNil$(arg).pj_adaptToPoint_andSend_(this,"*")});
i$(function pj_43_(arg){if(true==$asNil$(arg).pj_isPoint())return $asNil$($asNil$(this.x).pj_43_($asNil$(arg).pj_x())).pj_64_($asNil$(this.y).pj_43_($asNil$(arg).pj_y()));return $asNil$(arg).pj_adaptToPoint_andSend_(this,"+")});
i$(function pj_45_(arg){if(true==$asNil$(arg).pj_isPoint())return $asNil$($asNil$(this.x).pj_45_($asNil$(arg).pj_x())).pj_64_($asNil$(this.y).pj_45_($asNil$(arg).pj_y()));return $asNil$(arg).pj_adaptToPoint_andSend_(this,"-")});
i$(function pj_47_(arg){if(true==$asNil$(arg).pj_isPoint())return $asNil$($asNil$(this.x).pj_47_($asNil$(arg).pj_x())).pj_64_($asNil$(this.y).pj_47_($asNil$(arg).pj_y()));return $asNil$(arg).pj_adaptToPoint_andSend_(this,"/")});
i$(function pj_47_47_(arg){if(true==$asNil$(arg).pj_isPoint())return $asNil$($asNil$(this.x).pj_47_47_($asNil$(arg).pj_x())).pj_64_($asNil$(this.y).pj_47_47_($asNil$(arg).pj_y()));return $asNil$(arg).pj_adaptToPoint_andSend_(this,"//")});
i$(function pj_60_(aPoint){if(this.x<$asNil$(aPoint).pj_x())return this.y<$asNil$(aPoint).pj_y();else return false});
i$(function pj_60_61_(aPoint){if(this.x<=$asNil$(aPoint).pj_x())return this.y<=$asNil$(aPoint).pj_y();else return false});
i$(function pj_61_(aPoint){if(true==$asNil$(this.pj_species()).pj_61_($asNil$(aPoint).pj_species()))if(true==$asNil$(this.x).pj_61_($asNil$(aPoint).pj_x()))return $asNil$(this.y).pj_61_($asNil$(aPoint).pj_y());else return false;else return false});
i$(function pj_62_(aPoint){if(this.x>$asNil$(aPoint).pj_x())return this.y>$asNil$(aPoint).pj_y();else return false});
i$(function pj_62_61_(aPoint){if(this.x>=$asNil$(aPoint).pj_x())return this.y>=$asNil$(aPoint).pj_y();else return false});
i$(function pj_92_92_(arg){if(true==$asNil$(arg).pj_isPoint())return $asNil$($asNil$(this.x).pj_92_92_($asNil$(arg).pj_x())).pj_64_($asNil$(this.y).pj_92_92_($asNil$(arg).pj_y()));return $asNil$(arg).pj_adaptToPoint_andSend_(this,"\\\\")});
i$(function pj_abs(){return $asNil$($asNil$(this.x).pj_abs()).pj_64_($asNil$(this.y).pj_abs())});
i$(function pj_adaptToCollection_andSend_(rcvr,selector){var $_self_$=this;return $asNil$(rcvr).pj_collect_(function(element){return $asNil$(element).pj_perform_with_(selector,$_self_$)})});
i$(function pj_adaptToNumber_andSend_(rcvr,selector){return $asNil$($asNil$(rcvr).pj_64_(rcvr)).pj_perform_with_(selector,this)});
i$(function pj_adhereTo_(aRectangle){if(true==$asNil$(aRectangle).pj_containsPoint_(this))return this;return $asNil$($asNil$($asNil$(this.x).pj_max_($asNil$(aRectangle).pj_left())).pj_min_($asNil$(aRectangle).pj_right())).pj_64_($asNil$($asNil$(this.y).pj_max_($asNil$(aRectangle).pj_top())).pj_min_($asNil$(aRectangle).pj_bottom()))});
i$(function pj_angle(){return $asNil$(this.pj_y()).pj_arcTan_(this.pj_x())});
i$(function pj_angleWith_(aPoint){var ar,ap;ar=this.pj_angle();ap=$asNil$(aPoint).pj_angle();if(ap>=ar)return $asNil$(ap).pj_45_(ar);else return $asNil$($asNil$((Number.pj_pi()*2)).pj_45_(ar)).pj_43_(ap)});
i$(function pj_asFloatPoint(){if(true==this.pj_isFloatPoint())return this;return $asNil$($asNil$(this.x).pj_asFloat()).pj_64_($asNil$(this.y).pj_asFloat())});
i$(function pj_asIntegerPoint(){if(true==this.pj_isIntegerPoint())return this;return $asNil$($asNil$(this.x).pj_asInteger()).pj_64_($asNil$(this.y).pj_asInteger())});
i$(function pj_asMargin(){return Margin.pj_fromPoint_(this)});
i$(function pj_asNonFractionalPoint(){if(true==(true==$asNil$(this.x).pj_isFraction()||$asNil$(this.y).pj_isFraction()))return $asNil$($asNil$(this.x).pj_asFloat()).pj_64_($asNil$(this.y).pj_asFloat())});
i$(function pj_asPoint(){return this});
i$(function pj_bearingToPoint_(anotherPoint){var deltaX,deltaY;deltaX=$asNil$($asNil$(anotherPoint).pj_x()).pj_45_(this.x);deltaY=$asNil$($asNil$(anotherPoint).pj_y()).pj_45_(this.y);if($asNil$(deltaX).pj_abs()<0.001)if(deltaY>0)return 180;else return 0;return $asNil$($asNil$((deltaX>=0?90:270)).pj_45_($asNil$($asNil$($asNil$($asNil$(deltaY).pj_47_(deltaX)).pj_arcTan()).pj_negated()).pj_radiansToDegrees())).pj_rounded()});
i$(function pj_bitShiftPoint_(bits){this.x=$asNil$(this.x).pj_bitShift_(bits);this.y=$asNil$(this.y).pj_bitShift_(bits);return this});
i$(function pj_ceiling(){if(true==this.pj_isIntegerPoint())return this;return $asNil$($asNil$(this.x).pj_ceiling()).pj_64_($asNil$(this.y).pj_ceiling())});
i$(function pj_closeTo_(aPoint){if(true==$asNil$(this.x).pj_closeTo_($asNil$(aPoint).pj_x()))return $asNil$(this.y).pj_closeTo_($asNil$(aPoint).pj_y());else return false});
i$(function pj_corner_(aPoint){return PjRectangle.pj_origin_corner_(this,aPoint)});
i$(function pj_crossProduct_(aPoint){return $asNil$($asNil$(this.x).pj_42_($asNil$(aPoint).pj_y())).pj_45_($asNil$(this.y).pj_42_($asNil$(aPoint).pj_x()))});
i$(function pj_deepCopy(){return $asNil$($asNil$(this.x).pj_deepCopy()).pj_64_($asNil$(this.y).pj_deepCopy())});
i$(function pj_degrees(){var tan,theta;if(this.x==0)if(this.y>=0)return 90.0;else return 270.0;else {tan=$asNil$($asNil$(this.y).pj_asFloat()).pj_47_($asNil$(this.x).pj_asFloat());theta=$asNil$(tan).pj_arcTan();if(this.x>=0)if(this.y>=0)return $asNil$(theta).pj_radiansToDegrees();else return 360.0+$asNil$(theta).pj_radiansToDegrees();else return 180.0+$asNil$(theta).pj_radiansToDegrees()}});
i$(function pj_directionToLineFrom_to_(p1,p2){return $asNil$($asNil$($asNil$($asNil$(p2).pj_x()).pj_45_($asNil$(p1).pj_x())).pj_42_($asNil$(this.pj_y()).pj_45_($asNil$(p1).pj_y()))).pj_45_($asNil$($asNil$(this.pj_x()).pj_45_($asNil$(p1).pj_x())).pj_42_($asNil$($asNil$(p2).pj_y()).pj_45_($asNil$(p1).pj_y())))});
i$(function pj_dist_(aPoint){var dx,dy;dx=$asNil$($asNil$(aPoint).pj_x()).pj_45_(this.x);dy=$asNil$($asNil$(aPoint).pj_y()).pj_45_(this.y);return $asNil$($asNil$($asNil$(dx).pj_42_(dx)).pj_43_($asNil$(dy).pj_42_(dy))).pj_sqrt()});
i$(function pj_distanceTo_(aPoint){var dx,dy;dx=$asNil$($asNil$(aPoint).pj_x()).pj_45_(this.x);dy=$asNil$($asNil$(aPoint).pj_y()).pj_45_(this.y);return $asNil$($asNil$($asNil$(dx).pj_42_(dx)).pj_43_($asNil$(dy).pj_42_(dy))).pj_sqrt()});
i$(function pj_dotProduct_(aPoint){return $asNil$($asNil$(this.x).pj_42_($asNil$(aPoint).pj_x())).pj_43_($asNil$(this.y).pj_42_($asNil$(aPoint).pj_y()))});
i$(function pj_eightNeighbors(){return [this.pj_43_((1).pj_64_(0)),this.pj_43_((1).pj_64_(1)),this.pj_43_((0).pj_64_(1)),this.pj_43_((-1).pj_64_(1)),this.pj_43_((-1).pj_64_(0)),this.pj_43_((-1).pj_64_(-1)),this.pj_43_((0).pj_64_(-1)),this.pj_43_((1).pj_64_(-1))]});
i$(function pj_extent_(aPoint){return PjRectangle.pj_origin_extent_(this,aPoint)});
i$(function pj_flipBy_centerAt_(direction,c){if(direction==="vertical")return $asNil$(this.x).pj_64_($asNil$(($asNil$(c).pj_y()*2)).pj_45_(this.y));if(direction==="horizontal")return $asNil$($asNil$(($asNil$(c).pj_x()*2)).pj_45_(this.x)).pj_64_(this.y);this.pj_error_("unrecognizable direction");return this});
i$(function pj_floor(){if(true==this.pj_isIntegerPoint())return this;return $asNil$($asNil$(this.x).pj_floor()).pj_64_($asNil$(this.y).pj_floor())});
i$(function pj_fourDirections(){return Array.pj_with_with_with_with_(this.pj_leftRotated(),this.pj_negated(),this.pj_rightRotated(),this)});
i$(function pj_fourNeighbors(){return Array.pj_with_with_with_with_(this.pj_43_((1).pj_64_(0)),this.pj_43_((0).pj_64_(1)),this.pj_43_((-1).pj_64_(0)),this.pj_43_((0).pj_64_(-1)))});
i$(function pj_fromSton_(stonReader){var $_self_$=this;$asNil$(stonReader).pj_parseListDo_(function(each,index){if(index==1)$_self_$.x=each;if(index==2)return $_self_$.y=each;else return undefined});return this});
i$(function pj_fuelAccept_(aGeneralMapper){return $asNil$(aGeneralMapper).pj_visitPoint_(this)});
i$(function pj_grid_(aPoint){var newX,newY;newX=$asNil$($asNil$(this.x).pj_43_($asNil$($asNil$(aPoint).pj_x()).pj_47_47_(2))).pj_truncateTo_($asNil$(aPoint).pj_x());newY=$asNil$($asNil$(this.y).pj_43_($asNil$($asNil$(aPoint).pj_y()).pj_47_47_(2))).pj_truncateTo_($asNil$(aPoint).pj_y());return $asNil$(newX).pj_64_(newY)});
i$(function pj_guarded(){this.pj_max_((1).pj_64_(1));return this});
i$(function pj_hash(){return $asNil$($asNil$($asNil$($asNil$(this.x).pj_hash()).pj_hashMultiply()).pj_43_($asNil$(this.y).pj_hash())).pj_hashMultiply()});
i$(function pj_insideTriangle_with_with_(p1,p2,p3){var p0,b0,b1,b2,b3;p0=this;b0=$asNil$($asNil$($asNil$($asNil$(p2).pj_x()).pj_45_($asNil$(p1).pj_x())).pj_42_($asNil$($asNil$(p3).pj_y()).pj_45_($asNil$(p1).pj_y()))).pj_45_($asNil$($asNil$($asNil$(p3).pj_x()).pj_45_($asNil$(p1).pj_x())).pj_42_($asNil$($asNil$(p2).pj_y()).pj_45_($asNil$(p1).pj_y())));if(true==$asNil$(b0).pj_isZero())return false;b0=1.0.pj_47_(b0);b1=$asNil$($asNil$($asNil$($asNil$($asNil$(p2).pj_x()).pj_45_($asNil$(p0).pj_x())).pj_42_($asNil$($asNil$(p3).pj_y()).pj_45_($asNil$(p0).pj_y()))).pj_45_($asNil$($asNil$($asNil$(p3).pj_x()).pj_45_($asNil$(p0).pj_x())).pj_42_($asNil$($asNil$(p2).pj_y()).pj_45_($asNil$(p0).pj_y())))).pj_42_(b0);b2=$asNil$($asNil$($asNil$($asNil$($asNil$(p3).pj_x()).pj_45_($asNil$(p0).pj_x())).pj_42_($asNil$($asNil$(p1).pj_y()).pj_45_($asNil$(p0).pj_y()))).pj_45_($asNil$($asNil$($asNil$(p1).pj_x()).pj_45_($asNil$(p0).pj_x())).pj_42_($asNil$($asNil$(p3).pj_y()).pj_45_($asNil$(p0).pj_y())))).pj_42_(b0);b3=$asNil$($asNil$($asNil$($asNil$($asNil$(p1).pj_x()).pj_45_($asNil$(p0).pj_x())).pj_42_($asNil$($asNil$(p2).pj_y()).pj_45_($asNil$(p0).pj_y()))).pj_45_($asNil$($asNil$($asNil$(p2).pj_x()).pj_45_($asNil$(p0).pj_x())).pj_42_($asNil$($asNil$(p1).pj_y()).pj_45_($asNil$(p0).pj_y())))).pj_42_(b0);if(b1<0.0)return false;if(b2<0.0)return false;if(b3<0.0)return false;return true});
i$(function pj_interpolateTo_at_(end,amountDone){return $asNil$(this.pj_42_(1-amountDone)).pj_43_($asNil$(end).pj_42_(amountDone))});
i$(function pj_isFloatPoint(){if(true==$asNil$(this.x).pj_isFloat())return $asNil$(this.y).pj_isFloat();else return false});
i$(function pj_isInsideCircle_with_with_(a,b,c){return $asNil$($asNil$($asNil$($asNil$($asNil$(a).pj_dotProduct_(a)).pj_42_($asNil$(b).pj_triangleArea_with_(c,this))).pj_45_($asNil$($asNil$(b).pj_dotProduct_(b)).pj_42_($asNil$(a).pj_triangleArea_with_(c,this)))).pj_43_($asNil$($asNil$(c).pj_dotProduct_(c)).pj_42_($asNil$(a).pj_triangleArea_with_(b,this)))).pj_45_($asNil$(this.pj_dotProduct_(this)).pj_42_($asNil$(a).pj_triangleArea_with_(b,c)))>0.0});
i$(function pj_isIntegerPoint(){if(true==$asNil$(this.x).pj_isInteger())return $asNil$(this.y).pj_isInteger();else return false});
i$(function pj_isPoint(){return true});
i$(function pj_isSelfEvaluating(){return this.pj_class()===Point});
i$(function pj_isZero(){if(true==$asNil$(this.x).pj_isZero())return $asNil$(this.y).pj_isZero();else return false});
i$(function pj_leftRotated(){return $asNil$(this.y).pj_64_($asNil$(this.x).pj_negated())});
i$(function pj_max(){return $asNil$(this.pj_x()).pj_max_(this.pj_y())});
i$(function pj_max_(aPoint){return $asNil$($asNil$(this.x).pj_max_($asNil$(aPoint).pj_x())).pj_64_($asNil$(this.y).pj_max_($asNil$(aPoint).pj_y()))});
i$(function pj_min(){return $asNil$(this.pj_x()).pj_min_(this.pj_y())});
i$(function pj_min_(aPoint){return $asNil$($asNil$(this.x).pj_min_($asNil$(aPoint).pj_x())).pj_64_($asNil$(this.y).pj_min_($asNil$(aPoint).pj_y()))});
i$(function pj_min_max_(aMin,aMax){return $asNil$(this.pj_min_(aMin)).pj_max_(aMax)});
i$(function pj_nearestPointAlongLineFrom_to_(p1,p2){var x21,y21,t,x1,y1;if(true==$asNil$($asNil$(p1).pj_x()).pj_61_($asNil$(p2).pj_x()))return $asNil$($asNil$(p1).pj_x()).pj_64_(this.y);if(true==$asNil$($asNil$(p1).pj_y()).pj_61_($asNil$(p2).pj_y()))return $asNil$(this.x).pj_64_($asNil$(p1).pj_y());x1=$asNil$($asNil$(p1).pj_x()).pj_asFloat();y1=$asNil$($asNil$(p1).pj_y()).pj_asFloat();x21=$asNil$($asNil$($asNil$(p2).pj_x()).pj_asFloat()).pj_45_(x1);y21=$asNil$($asNil$($asNil$(p2).pj_y()).pj_asFloat()).pj_45_(y1);t=$asNil$($asNil$($asNil$($asNil$($asNil$(this.y).pj_asFloat()).pj_45_(y1)).pj_47_(x21)).pj_43_($asNil$($asNil$($asNil$(this.x).pj_asFloat()).pj_45_(x1)).pj_47_(y21))).pj_47_($asNil$($asNil$(x21).pj_47_(y21)).pj_43_($asNil$(y21).pj_47_(x21)));return $asNil$($asNil$(x1).pj_43_($asNil$(t).pj_42_(x21))).pj_64_($asNil$(y1).pj_43_($asNil$(t).pj_42_(y21)))});
i$(function pj_nearestPointOnLineFrom_to_(p1,p2){return $asNil$(this.pj_nearestPointAlongLineFrom_to_(p1,p2)).pj_adhereTo_($asNil$(p1).pj_rectangle_(p2))});
i$(function pj_negated(){return $asNil$((0-this.x)).pj_64_(0-this.y)});
i$(function pj_normal(){var n,d;n=$asNil$($asNil$(this.y).pj_negated()).pj_64_(this.x);if((d=$asNil$($asNil$($asNil$(n).pj_x()).pj_42_($asNil$(n).pj_x())).pj_43_($asNil$($asNil$(n).pj_y()).pj_42_($asNil$(n).pj_y())))==0)return (-1).pj_64_(0);return $asNil$(n).pj_47_($asNil$(d).pj_sqrt())});
i$(function pj_normalized(){var r;r=$asNil$($asNil$($asNil$(this.x).pj_42_(this.x)).pj_43_($asNil$(this.y).pj_42_(this.y))).pj_sqrt();return $asNil$($asNil$(this.x).pj_47_(r)).pj_64_($asNil$(this.y).pj_47_(r))});
i$(function pj_octantOf_(otherPoint){var quad,moreHoriz;if(true==(true==$asNil$(this.x).pj_61_($asNil$(otherPoint).pj_x())&&this.y>$asNil$(otherPoint).pj_y()))return 6;if(true==(true==$asNil$(this.y).pj_61_($asNil$(otherPoint).pj_y())&&this.x<$asNil$(otherPoint).pj_x()))return 8;quad=this.pj_quadrantOf_(otherPoint);moreHoriz=$asNil$($asNil$(this.x).pj_45_($asNil$(otherPoint).pj_x())).pj_abs()>=$asNil$($asNil$(this.y).pj_45_($asNil$(otherPoint).pj_y())).pj_abs();if(true==$asNil$($asNil$(quad).pj_even()).pj_eqv_(moreHoriz))return quad*2;else return quad*2-1});
i$(function pj_onLineFrom_to_(p1,p2){return this.pj_onLineFrom_to_within_(p1,p2,2)});
i$(function pj_onLineFrom_to_within_(p1,p2,epsilon){if($asNil$(p1).pj_x()<$asNil$(p2).pj_x())if(true==(this.x<$asNil$($asNil$(p1).pj_x()).pj_45_(epsilon)||this.x>$asNil$($asNil$(p2).pj_x()).pj_43_(epsilon)))return false;else if(true==(this.x<$asNil$($asNil$(p2).pj_x()).pj_45_(epsilon)||this.x>$asNil$($asNil$(p1).pj_x()).pj_43_(epsilon)))return false;if($asNil$(p1).pj_y()<$asNil$(p2).pj_y())if(true==(this.y<$asNil$($asNil$(p1).pj_y()).pj_45_(epsilon)||this.y>$asNil$($asNil$(p2).pj_y()).pj_43_(epsilon)))return false;else if(true==(this.y<$asNil$($asNil$(p2).pj_y()).pj_45_(epsilon)||this.y>$asNil$($asNil$(p1).pj_y()).pj_43_(epsilon)))return false;return this.pj_distanceTo_(this.pj_nearestPointAlongLineFrom_to_(p1,p2))<=epsilon});
i$(function pj_printOn_(aStream){$asNil$(aStream).pj_nextPut_("(");$asNil$(this.x).pj_printOn_(aStream);$asNil$(aStream).pj_nextPut_("@");if(true==(true==$asNil$(this.y).pj_notNil()&&$asNil$(this.y).pj_negative()))$asNil$(aStream).pj_space();$asNil$(this.y).pj_printOn_(aStream);$asNil$(aStream).pj_nextPut_(")");return this});
i$(function pj_quadrantOf_(otherPoint){if(this.x<=$asNil$(otherPoint).pj_x())if(this.y<$asNil$(otherPoint).pj_y())return 1;else return 4;else if(this.y<=$asNil$(otherPoint).pj_y())return 2;else return 3});
i$(function pj_r(){return $asNil$(this.pj_dotProduct_(this)).pj_sqrt()});
i$(function pj_reciprocal(){return $asNil$($asNil$(this.x).pj_reciprocal()).pj_64_($asNil$(this.y).pj_reciprocal())});
i$(function pj_rectangle_(aPoint){return PjRectangle.pj_point_point_(this,aPoint)});
i$(function pj_reflectedAbout_(aPoint){return $asNil$($asNil$(this.pj_45_(aPoint)).pj_negated()).pj_43_(aPoint)});
i$(function pj_rightRotated(){return $asNil$($asNil$(this.y).pj_negated()).pj_64_(this.x)});
i$(function pj_rotateBy_about_(angle,center){var p,r,theta;p=this.pj_45_(center);r=$asNil$(p).pj_r();theta=$asNil$($asNil$(angle).pj_asFloat()).pj_45_($asNil$(p).pj_theta());return $asNil$($asNil$($asNil$($asNil$(center).pj_x()).pj_asFloat()).pj_43_($asNil$(r).pj_42_($asNil$(theta).pj_cos()))).pj_64_($asNil$($asNil$($asNil$(center).pj_y()).pj_asFloat()).pj_45_($asNil$(r).pj_42_($asNil$(theta).pj_sin())))});
i$(function pj_rotateBy_centerAt_(direction,c){var offset;offset=this.pj_45_(c);if(direction==="right")return $asNil$($asNil$($asNil$($asNil$(offset).pj_y()).pj_negated()).pj_64_($asNil$(offset).pj_x())).pj_43_(c);if(direction==="left")return $asNil$($asNil$($asNil$(offset).pj_y()).pj_64_($asNil$($asNil$(offset).pj_x()).pj_negated())).pj_43_(c);if(direction==="pi")return $asNil$(c).pj_45_(offset);this.pj_error_("unrecognizable direction");return this});
i$(function pj_roundDownTo_(grid){var gridPoint;gridPoint=$asNil$(grid).pj_asPoint();return $asNil$($asNil$(this.x).pj_roundDownTo_($asNil$(gridPoint).pj_x())).pj_64_($asNil$(this.y).pj_roundDownTo_($asNil$(gridPoint).pj_y()))});
i$(function pj_roundTo_(grid){var gridPoint;gridPoint=$asNil$(grid).pj_asPoint();return $asNil$($asNil$(this.x).pj_roundTo_($asNil$(gridPoint).pj_x())).pj_64_($asNil$(this.y).pj_roundTo_($asNil$(gridPoint).pj_y()))});
i$(function pj_roundUpTo_(grid){var gridPoint;gridPoint=$asNil$(grid).pj_asPoint();return $asNil$($asNil$(this.x).pj_roundUpTo_($asNil$(gridPoint).pj_x())).pj_64_($asNil$(this.y).pj_roundUpTo_($asNil$(gridPoint).pj_y()))});
i$(function pj_rounded(){if(true==this.pj_isIntegerPoint())return this;return $asNil$($asNil$(this.x).pj_rounded()).pj_64_($asNil$(this.y).pj_rounded())});
i$(function pj_scaleBy_(factor){return $asNil$($asNil$($asNil$(factor).pj_x()).pj_42_(this.x)).pj_64_($asNil$($asNil$(factor).pj_y()).pj_42_(this.y))});
i$(function pj_scaleFrom_to_(rect1,rect2){return $asNil$($asNil$(rect2).pj_topLeft()).pj_43_($asNil$($asNil$($asNil$($asNil$(this.x).pj_45_($asNil$(rect1).pj_left())).pj_42_($asNil$(rect2).pj_width())).pj_47_47_($asNil$(rect1).pj_width())).pj_64_($asNil$($asNil$($asNil$(this.y).pj_45_($asNil$(rect1).pj_top())).pj_42_($asNil$(rect2).pj_height())).pj_47_47_($asNil$(rect1).pj_height())))});
i$(function pj_scaleTo_(anExtent){var factor,sX,sY;factor=3.0.pj_reciprocal();sX=$asNil$($asNil$(anExtent).pj_x()).pj_47_($asNil$(this.pj_x()).pj_asFloat());sY=$asNil$($asNil$(anExtent).pj_y()).pj_47_($asNil$(this.pj_y()).pj_asFloat());if(true==$asNil$(sX).pj_61_(sY))return $asNil$(sX).pj_64_(sY);if(sX<sY)return $asNil$(sX).pj_64_($asNil$(sX).pj_max_($asNil$(sY).pj_42_(factor)));else return $asNil$($asNil$(sY).pj_max_($asNil$(sX).pj_42_(factor))).pj_64_(sY)});
i$(function pj_scaledByDisplayScaleFactor(){return this.pj_42_($asNil$(World).pj_displayScaleFactor())});
i$(function pj_setR_degrees_(rho,degrees){var radians;radians=$asNil$($asNil$(degrees).pj_asFloat()).pj_degreesToRadians();this.x=$asNil$($asNil$(rho).pj_asFloat()).pj_42_($asNil$(radians).pj_cos());this.y=$asNil$($asNil$(rho).pj_asFloat()).pj_42_($asNil$(radians).pj_sin());return this});
i$(function pj_setX_setY_(xValue,yValue){this.x=xValue;this.y=yValue;return this});
i$(function pj_sideOf_(otherPoint){var side;side=$asNil$(this.pj_crossProduct_(otherPoint)).pj_sign();return ["right","center","left"].pj_at_(side+2)});
i$(function pj_sign(){return $asNil$($asNil$(this.x).pj_sign()).pj_64_($asNil$(this.y).pj_sign())});
i$(function pj_sortsBefore_(otherPoint){if(true==$asNil$(this.y).pj_61_($asNil$(otherPoint).pj_y()))return this.x<=$asNil$(otherPoint).pj_x();else return this.y<=$asNil$(otherPoint).pj_y()});
i$(function pj_squaredDistanceTo_(aPoint){var delta;delta=$asNil$(aPoint).pj_45_(this);return $asNil$(delta).pj_dotProduct_(delta)});
i$(function pj_stonOn_(stonWriter){var $_self_$=this;$asNil$(stonWriter).pj_writeObject_streamShortList_(this,function(array){var $1;return ($1=$asNil$(array),$1.pj_add_($_self_$.x),$1.pj_add_($_self_$.y))});return this});
i$(function pj_storeOn_(aStream){$asNil$(aStream).pj_nextPut_("(");this.pj_printOn_(aStream);$asNil$(aStream).pj_nextPut_(")");return this});
i$(function pj_theta(){var tan,theta;if(this.x==0)if(this.y>=0)return 1.570796326794897;else return 4.71238898038469;else {tan=$asNil$($asNil$(this.y).pj_asFloat()).pj_47_($asNil$(this.x).pj_asFloat());theta=$asNil$(tan).pj_arcTan();if(this.x>=0)if(this.y>=0)return theta;else return 6.283185307179586+theta;else return 3.141592653589793+theta}});
i$(function pj_to_intersects_to_(end1,start2,end2){var start1,sideStart,sideEnd;start1=this;if(true==(true==(true==(true==$asNil$(start1).pj_61_(start2)||$asNil$(end1).pj_61_(end2))||$asNil$(start1).pj_61_(end2))||$asNil$(start2).pj_61_(end1)))return true;sideStart=$asNil$(start1).pj_to_sideOf_(end1,start2);sideEnd=$asNil$(start1).pj_to_sideOf_(end1,end2);if(true==$asNil$(sideStart).pj_61_(sideEnd))return false;sideStart=$asNil$(start2).pj_to_sideOf_(end2,start1);sideEnd=$asNil$(start2).pj_to_sideOf_(end2,end1);if(true==$asNil$(sideStart).pj_61_(sideEnd))return false;return true});
i$(function pj_to_sideOf_(end,otherPoint){return $asNil$($asNil$(end).pj_45_(this)).pj_sideOf_($asNil$(otherPoint).pj_45_(this))});
i$(function pj_translateBy_(delta){return $asNil$($asNil$($asNil$(delta).pj_x()).pj_43_(this.x)).pj_64_($asNil$($asNil$(delta).pj_y()).pj_43_(this.y))});
i$(function pj_transposed(){return $asNil$(this.y).pj_64_(this.x)});
i$(function pj_triangleArea_with_(b,c){return $asNil$($asNil$($asNil$($asNil$(b).pj_x()).pj_45_(this.pj_x())).pj_42_($asNil$($asNil$(c).pj_y()).pj_45_(this.pj_y()))).pj_45_($asNil$($asNil$($asNil$(b).pj_y()).pj_45_(this.pj_y())).pj_42_($asNil$($asNil$(c).pj_x()).pj_45_(this.pj_x())))});
i$(function pj_truncateTo_(grid){var gridPoint;gridPoint=$asNil$(grid).pj_asPoint();return $asNil$($asNil$(this.x).pj_truncateTo_($asNil$(gridPoint).pj_x())).pj_64_($asNil$(this.y).pj_truncateTo_($asNil$(gridPoint).pj_y()))});
i$(function pj_truncated(){if(true==this.pj_isIntegerPoint())return this;return $asNil$($asNil$(this.x).pj_truncated()).pj_64_($asNil$(this.y).pj_truncated())});
i$(function pj_veryDeepCopyWith_(deepCopier){return this});
i$(function pj_x(){return this.x});
i$(function pj_y(){return this.y});
c$(function pj_approvedSelectorsForMethodFinder(){return this.pj_selectors()});
c$(function pj_r_degrees_(rho,degrees){return $asNil$(this.pj_basicNew()).pj_setR_degrees_(rho,degrees)});
c$(function pj_settingInputWidgetForNode_(aSettingNode){return $asNil$(aSettingNode).pj_inputWidgetForPoint()});
c$(function pj_x_y_(xInteger,yInteger){return $asNil$(this.pj_basicNew()).pj_setX_setY_(xInteger,yInteger)});
})
Object.pj_subclass_("PjReadWriteStream");
PjReadWriteStream.$$def(function(i$,c$,cp$){
i$(function pj_atEnd(){if(this.position>=this.readLimit)if(1<$asNil$(this.array).pj_size())this.pj_contents();return this.position>=this.readLimit});
i$(function pj_back(){if(this.pj_position()==0)this.pj_positionError();this.pj_skip_(-1);return this.pj_peek()});
i$(function pj_contents(){return this.pj_load_(this.pj_join())});
i$(function pj_emptyCollection(){this.pj_subclassResponsibility();return this});
i$(function pj_initialize(){Object.prototype.pj_initialize.call(this);this.array=Array.pj_with_(this.collection=this.pj_emptyCollection());this.readLimit=0;this.position=0;return this});
i$(function pj_isEmpty(){if(true==this.pj_atEnd())return this.position==0;else return false});
i$(function pj_join(){return this.pj_subclassResponsibility()});
i$(function pj_load_(temp){this.array=Array.pj_with_(temp);this.collection=temp;this.readLimit=$asNil$(temp).pj_size();return temp});
i$(function pj_match_(subCollection){var pattern,startMatch;pattern=$asNil$(subCollection).pj_readStream();startMatch=undefined;while(false==$asNil$(pattern).pj_atEnd()){if(true==this.pj_atEnd())return false;if(true==$asNil$(this.pj_next()).pj_61_($asNil$(pattern).pj_next()))if($asNil$(pattern).pj_position()==1)startMatch=this.pj_position();else {$asNil$(pattern).pj_position_(0);if(startMatch!=undefined){this.pj_position_(startMatch);startMatch=undefined}}}return true});
i$(function pj_next(){if(true==this.pj_atEnd())return undefined;return $asNil$(this.collection).pj_at_(this.position=this.position+1)});
i$(function pj_next_(anInteger){var newArray,$_self_$=this;newArray=$asNil$($asNil$(this.collection).pj_species()).pj_new_(anInteger);(1).pj_to_do_(anInteger,function(index){return $asNil$(newArray).pj_at_put_(index,$_self_$.pj_next())});return newArray});
i$(function pj_nextDelimited_(terminator){var out,ch;out=$asNil$(String.pj_new_(1000)).pj_writeStream();if(true==this.pj_atEnd())return "";if(this.pj_next()!==terminator)this.pj_skip_(-1);while((ch=this.pj_next())!==undefined){if(ch===terminator)if(this.pj_peek()===terminator)this.pj_next();else return $asNil$(out).pj_contents();$asNil$(out).pj_nextPut_(ch)}return $asNil$(out).pj_contents()});
i$(function pj_nextPut_(aCharacter){return this.pj_subclassResponsibility()});
i$(function pj_on_(temp){this.pj_load_(temp);this.pj_reset();return this});
i$(function pj_peek(){var nextObject;if(true==this.pj_atEnd())return undefined;nextObject=this.pj_next();this.position=this.position-1;return nextObject});
i$(function pj_peekBack(){var element;element=this.pj_back();this.pj_skip_(1);return element});
i$(function pj_peekFor_(anObject){var nextObject;if(true==this.pj_atEnd())return false;nextObject=this.pj_next();if(true==$asNil$(anObject).pj_61_(nextObject))return true;this.position=this.position-1;return false});
i$(function pj_position(){return this.position});
i$(function pj_position_(anInteger){if(true==$asNil$(anInteger).pj_between_and_(0,this.readLimit))this.position=anInteger;else this.pj_positionError();return this});
i$(function pj_positionError(){this.pj_error_("Attempt to set the position of a PositionableStream out of bounds");return this});
i$(function pj_reset(){this.position=0;return this});
i$(function pj_resetContents(){this.position=0;this.readLimit=0;return this});
i$(function pj_setFrom_to_(newStart,newStop){this.position=newStart-1;this.readLimit=newStop;return this});
i$(function pj_setToEnd(){this.position=this.readLimit;return this});
i$(function pj_skip_(n){this.position=$asNil$(this.position).pj_43_(n);return this});
i$(function pj_upTo_(anObject){var newStream,element;newStream=$asNil$($asNil$($asNil$(this.collection).pj_species()).pj_new_(100)).pj_writeStream();while(false==(true==this.pj_atEnd()||$asNil$((element=this.pj_next())).pj_61_(anObject))){$asNil$(newStream).pj_nextPut_(element)}return $asNil$(newStream).pj_contents()});
})
Object.pj_subclass_("PjSharedPool");
PjSharedPool.$$def(function(i$,c$,cp$){
})
Object.pj_subclass_("PjMagnitude");
PjMagnitude.$$def(function(i$,c$,cp$){
i$(function pj_60_(aMagnitude){return this.pj_subclassResponsibility()});
i$(function pj_60_(aMagnitude){return this.pj_subclassResponsibility()});
i$(function pj_60_61_(aMagnitude){return $asNil$((this>aMagnitude)).pj_not()});
i$(function pj_61_(aMagnitude){return this.pj_subclassResponsibility()});
i$(function pj_61_(aMagnitude){return this.pj_subclassResponsibility()});
i$(function pj_62_(aMagnitude){return aMagnitude<this});
i$(function pj_62_61_(aMagnitude){return aMagnitude<=this});
i$(function pj_between_and_(min,max){if(this>=min)return this<=max;else return false});
i$(function pj_compareWith_ifLesser_ifEqual_ifGreater_(anotherMagnitude,lesserBlock,equalBlock,greaterBlock){var $_self_$=this;return $asNil$((this<anotherMagnitude)).pj_ifTrue_ifFalse_(lesserBlock,function(){return $asNil$(($_self_$==anotherMagnitude)).pj_ifTrue_ifFalse_(equalBlock,greaterBlock)})});
i$(function pj_max_(aMagnitude){if(this>aMagnitude)return this;else return aMagnitude});
i$(function pj_min_(aMagnitude){if(this<aMagnitude)return this;else return aMagnitude});
i$(function pj_min_max_(aMin,aMax){return $asNil$(this.pj_min_(aMin)).pj_max_(aMax)});
})
Object.pj_subclass_("Error");
Error.$$def(function(i$,c$,cp$){
i$(function pj_messageText(){return this.message});
i$(function pj_messageText_(anObject){this.message=anObject;return this});
i$(function pj_signal(){throw this});
i$(function pj_signal_(aString){this.pj_messageText_(aString);return this.pj_signal()});
c$(function pj_javascriptInitialize(){this.pj_instVarNamed_put_("stackTraceLimit",100);return this});
c$(function pj_signal(){return $asNil$(this.pj_new()).pj_signal()});
c$(function pj_signal_(aString){return $asNil$(this.pj_new()).pj_signal_(aString)});
})
Object.pj_subclass_("PjCollection");
PjCollection.$$def(function(i$,c$,cp$){
i$(function pj_61_(aMagnitude){return this.pj_subclassResponsibility()});
i$(function pj_61_(aMagnitude){return this.pj_subclassResponsibility()});
i$(function pj_addAll_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_add_(each)});return aCollection});
i$(function pj_allSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_anySatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=true;else return undefined});return false}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_asDictionary(){return this.pj_as_(PjDictionary)});
i$(function pj_asOrderedCollection(){return this.pj_as_(Array)});
i$(function pj_asSet(){return PjSet.pj_withAll_(this)});
i$(function pj_associationsDo_(aBlock){this.pj_do_(aBlock);return this});
i$(function pj_atRandom(){var randomIndex = Math.floor((Math.random() * this.pj_size()) + 1);
return this.pj_at_(randomIndex);});
i$(function pj_detect_ifFound_(aBlock,foundBlock){this.pj_detect_ifFound_ifNone_(aBlock,foundBlock,function(){return undefined});return this});
i$(function pj_detect_ifFound_ifNone_(aBlock,foundBlock,exceptionBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=$asNil$(foundBlock).pj_cull_(each);else return undefined});return $asNil$(exceptionBlock).pj_value()}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_detect_ifNone_(aBlock,exceptionBlock){return this.pj_detect_ifFound_ifNone_(aBlock,function(element){return element},exceptionBlock)});
i$(function pj_includesAll_(aCollection){var $_self_$=this;var $_err_$={};try{$asNil$(aCollection).pj_do_(function(elem){if(true==$_self_$.pj_includes_(elem))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_inject_into_(thisValue,binaryBlock){var nextValue;nextValue=thisValue;this.pj_do_(function(each){return nextValue=$asNil$(binaryBlock).pj_value_value_(nextValue,each)});return nextValue});
i$(function pj_isCollection(){return true});
i$(function pj_isEmptyOrNil(){return this.pj_isEmpty()});
i$(function pj_noneSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(item){if(true==$asNil$(aBlock).pj_value_(item))throw $_err_$=false;else return undefined});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_reject_(aBlock){return this.pj_select_(function(element){return $asNil$(aBlock).pj_value_(element)===false})});
i$(function pj_remove_(oldObject){var $_self_$=this;return this.pj_remove_ifAbsent_(oldObject,function(){return $_self_$.pj_errorNotFound_(oldObject)})});
i$(function pj_removeAll_(aCollection){var $_self_$=this;if(aCollection===this)return this.pj_removeAll();$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_remove_(each)});return aCollection});
c$(function pj_new_(ignored){return this.pj_new()});
c$(function pj_newFrom_(aCollection){var newCollection;newCollection=this.pj_new_($asNil$(aCollection).pj_size());$asNil$(newCollection).pj_addAll_(aCollection);return newCollection});
c$(function pj_withAll_(aCollection){var $1;return ($1=$asNil$(this.pj_new_($asNil$(aCollection).pj_size())),$1.pj_addAll_(aCollection),$1.pj_yourself())});
})
Object.pj_subclass_("PjMaterializer");
PjMaterializer.$$def(function(i$,c$,cp$){
c$(function pj_materializeFrom_(anObject){return $asNil$(anObject).pj_materialize()});
c$(function pj_materializeFromArray_(array){var $class;$class=$asNil$(window).pj_instVarNamed_($asNil$(array).pj_first());return $asNil$($class).pj_newFromMaterialized_($asNil$(array).pj_second())});
c$(function pj_materializeFromString_(aString){var array;array=$asNil$(JSON).pj_parse_(aString);return this.pj_materializeFromArray_(array)});
})
Object.pj_subclass_("String");
String.$$def(function(i$,c$,cp$){
i$(function pj_44_(other){return this+other});
i$(function pj_44_(other){return this+other});
i$(function pj_60_(other){return this<other});
i$(function pj_60_61_(other){return this<=other});
i$(function pj_61_(other){return this==other});
i$(function pj_61_(other){return this==other});
i$(function pj_62_(other){return this>other});
i$(function pj_62_61_(other){return this>=other});
i$(function pj_addAll_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_add_(each)});return aCollection});
i$(function pj_addAllLast_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_addLast_(each)});return aCollection});
i$(function pj_allButFirst(){return this.substring(1)});
i$(function pj_allButFirst_(n){return this.substring(n)});
i$(function pj_allButLast(){return this.substring(0,this.pj_size()-1)});
i$(function pj_allButLast_(n){return this.substring(0,$asNil$(this.pj_size()).pj_45_(n))});
i$(function pj_allSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_anySatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=true;else return undefined});return false}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_appendTo_(aCollection){return $asNil$(aCollection).pj_addAllLast_(this)});
i$(function pj_asCharacter(){return this.charAt(0)});
i$(function pj_asDictionary(){return this.pj_as_(PjDictionary)});
i$(function pj_asElementId(){return $asNil$(document).pj_getElementById_(this)});
i$(function pj_asElementSelector(){return $asNil$(document).pj_querySelector_(this)});
i$(function pj_asInteger(){return parseInt(this)});
i$(function pj_asJsObject(){var jsObject;if(true==(true==this.pj_notEmpty()&&$asNil$($asNil$(this.pj_first()).pj_isKindOf_(PjAssociation)).pj_not()))return this;jsObject=Object.pj_new();this.pj_do_(function(association){return $asNil$(jsObject).pj_at_put_($asNil$(association).pj_key(),$asNil$($asNil$(association).pj_value()).pj_asJsObject())});return jsObject});
i$(function pj_asLowercase(){return this.toLowerCase()});
i$(function pj_asNumber(){return parseFloat(this)});
i$(function pj_asOrderedCollection(){return this.pj_as_(Array)});
i$(function pj_asRegex(){return new RegExp(this)});
i$(function pj_asSet(){return PjSet.pj_withAll_(this)});
i$(function pj_asString(){return ""+this});
i$(function pj_asSymbol(){return ""+this});
i$(function pj_asUppercase(){return this.toUpperCase()});
i$(function pj_asciiValue(){return this.charCodeAt(0)});
i$(function pj_associationsDo_(aBlock){this.pj_do_(aBlock);return this});
i$(function pj_at_(index){return this[index - 1];});
i$(function pj_at_(index){return this[index - 1];});
i$(function pj_at_ifAbsent_(index,aBlock){if(true==(index>0&&index>this.pj_size()))return $asNil$(aBlock).pj_value();return this.pj_at_(index)});
i$(function pj_at_put_(index,anObject){throw new Error("cannot mutate strings");});
i$(function pj_atRandom(){var randomIndex = Math.floor((Math.random() * this.pj_size()) + 1);
return this.pj_at_(randomIndex);});
i$(function pj_basicAt_(aNumber){return this.charCodeAt(aNumber-1)});
i$(function pj_beginsWith_(prefix){return $asNil$(this.substring(0,$asNil$(prefix).pj_size())).pj_61_(prefix)});
i$(function pj_capitalized(){if(true==this.pj_isEmpty())return this;return $asNil$((this.charAt(0)).toUpperCase()).pj_44_(this.substring(1))});
i$(function pj_charCode(){return this.pj_basicAt_(1)});
i$(function pj_codePoint(){return this.charCodeAt(0)});
i$(function pj_collect_(aBlock){var arr;arr=this.split("");(1).pj_to_do_(this.pj_size(),function(idx){return $asNil$(arr).pj_at_put_(idx,$asNil$(aBlock).pj_value_($asNil$(arr).pj_at_(idx)))});return arr.join("")});
i$(function pj_collect_(aBlock){var arr;arr=this.split("");(1).pj_to_do_(this.pj_size(),function(idx){return $asNil$(arr).pj_at_put_(idx,$asNil$(aBlock).pj_value_($asNil$(arr).pj_at_(idx)))});return arr.join("")});
i$(function pj_copyFrom_(start){return this.substring(start-1)});
i$(function pj_copyFrom_to_(start,stop){return this.substring(start-1,stop)});
i$(function pj_copyReplaceFrom_to_with_(start,stop,replacementCollection){var newSequenceableCollection,newSize,endReplacement;newSize=$asNil$($asNil$(this.pj_size()).pj_45_($asNil$(stop).pj_45_(start)+1)).pj_43_($asNil$(replacementCollection).pj_size());endReplacement=$asNil$((start-1)).pj_43_($asNil$(replacementCollection).pj_size());newSequenceableCollection=$asNil$(this.pj_species()).pj_new_(newSize);if(start>1)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(1,start-1,this,1);if(start<=endReplacement)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(start,endReplacement,replacementCollection,1);if(endReplacement<newSize)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(endReplacement+1,newSize,this,stop+1);return newSequenceableCollection});
i$(function pj_copyWith_(newElement){var newIC;newIC=$asNil$(this.pj_species()).pj_new_(this.pj_size()+1);$asNil$(newIC).pj_replaceFrom_to_with_startingAt_(1,this.pj_size(),this,1);$asNil$(newIC).pj_at_put_($asNil$(newIC).pj_size(),newElement);return newIC});
i$(function pj_copyWithFirst_(newElement){var newIC;newIC=$asNil$(this.pj_species()).pj_ofSize_(this.pj_size()+1);$asNil$(newIC).pj_replaceFrom_to_with_startingAt_(2,this.pj_size()+1,this,1);$asNil$(newIC).pj_at_put_(1,newElement);return newIC});
i$(function pj_copyWithoutIndex_(index){var copy;copy=$asNil$(this.pj_species()).pj_ofSize_(this.pj_size()-1);$asNil$(copy).pj_replaceFrom_to_with_startingAt_(1,index-1,this,1);$asNil$(copy).pj_replaceFrom_to_with_startingAt_(index,$asNil$(copy).pj_size(),this,index+1);return copy});
i$(function pj_detect_ifFound_(aBlock,foundBlock){this.pj_detect_ifFound_ifNone_(aBlock,foundBlock,function(){return undefined});return this});
i$(function pj_detect_ifFound_ifNone_(aBlock,foundBlock,exceptionBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=$asNil$(foundBlock).pj_cull_(each);else return undefined});return $asNil$(exceptionBlock).pj_value()}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_detect_ifNone_(aBlock,exceptionBlock){return this.pj_detect_ifFound_ifNone_(aBlock,function(element){return element},exceptionBlock)});
i$(function pj_do_(aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i]);return this});
i$(function pj_do_separatedBy_(elementBlock,separatorBlock){for(var i=0,max=this.length;i<max;++i){if(i)separatorBlock();elementBlock(this[i])};return this});
i$(function pj_doWithIndex_(elementAndIndexBlock){return this.pj_withIndexDo_(elementAndIndexBlock)});
i$(function pj_endsWith_(suffix){return $asNil$(this.substring($asNil$(this.pj_size()).pj_45_($asNil$(suffix).pj_size()))).pj_61_(suffix)});
i$(function pj_findTokens_(delimiters){var tokens,keyStart,keyStop,separators;tokens=Array.pj_new();separators=true==$asNil$(delimiters).pj_isCharacter()?Array.pj_with_(delimiters):delimiters;keyStop=1;while(keyStop<=this.pj_size()){keyStart=this.pj_skipDelimiters_startingAt_(separators,keyStop);keyStop=this.pj_findDelimiters_startingAt_(separators,keyStart);if(keyStart<keyStop)$asNil$(tokens).pj_add_(this.pj_copyFrom_to_(keyStart,keyStop-1))}return tokens});
i$(function pj_first(){return this.pj_at_(1)});
i$(function pj_first(){return this.pj_at_(1)});
i$(function pj_first_(n){return this.substring(0,n)});
i$(function pj_from_to_put_(startIndex,endIndex,anObject){var written,toWrite,thisWrite;if(startIndex>endIndex)return this;this.pj_at_put_(startIndex,anObject);written=1;toWrite=$asNil$(endIndex).pj_45_(startIndex)+1;while(written<toWrite){thisWrite=$asNil$(written).pj_min_($asNil$(toWrite).pj_45_(written));this.pj_replaceFrom_to_with_startingAt_($asNil$(startIndex).pj_43_(written),$asNil$($asNil$(startIndex).pj_43_(written)).pj_43_(thisWrite)-1,this,startIndex);written=$asNil$(written).pj_43_(thisWrite)}return anObject});
i$(function pj_grownBy_(length){var newCollection,size;size=this.pj_size();newCollection=$asNil$(this.pj_species()).pj_ofSize_($asNil$(size).pj_43_(length));$asNil$(newCollection).pj_replaceFrom_to_with_startingAt_(1,size,this,1);return newCollection});
i$(function pj_hash(){return $asNil$(this.pj_class()).pj_stringHash_initialHash_(this,0)});
i$(function pj_ifEmpty_(aBlock){if(true==this.pj_isEmpty())return $asNil$(aBlock).pj_value();return this});
i$(function pj_ifEmpty_(aBlock){if(true==this.pj_isEmpty())return $asNil$(aBlock).pj_value();return this});
i$(function pj_includes_(x){if (x.pj_isJSPrimitiveType()) {
if (this.includes(x)) return true;
for(var i=this.length-1;i>=0;--i) if (x==this[i]) return true;
return false}
for(var i=this.length-1;i>=0;--i) if (x.pj_61_(this[i])) return true;
return false});
i$(function pj_includesAll_(aCollection){var $_self_$=this;var $_err_$={};try{$asNil$(aCollection).pj_do_(function(elem){if(true==$_self_$.pj_includes_(elem))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_indexOf_(x){return this.indexOf(x)+1});
i$(function pj_inject_into_(thisValue,binaryBlock){var nextValue;nextValue=thisValue;this.pj_do_(function(each){return nextValue=$asNil$(binaryBlock).pj_value_value_(nextValue,each)});return nextValue});
i$(function pj_insert_before_(anObject,spot){this.splice(spot-1, 0, anObject);return anObject});
i$(function pj_isArray(){return true});
i$(function pj_isCharacter(){return true});
i$(function pj_isCollection(){return true});
i$(function pj_isEmpty(){return this==""});
i$(function pj_isEmpty(){return this==""});
i$(function pj_isEmptyOrNil(){return this.pj_isEmpty()});
i$(function pj_isJSPrimitiveType(){return true});
i$(function pj_isLetter(){return $asNil$(this.pj_letterCharCodes()).pj_includes_(this.charCodeAt(0))});
i$(function pj_isString(){return true});
i$(function pj_isVowel(){return "AEIOU".pj_includes_(this.pj_asUppercase())});
i$(function pj_join_(anArray){return anArray.join(this)});
i$(function pj_last(){return this.pj_at_(this.pj_size())});
i$(function pj_last(){return this.pj_at_(this.pj_size())});
i$(function pj_lastIndexOf_(x){return this.lastIndexOf(x)+1});
i$(function pj_letterCharCodes(){return [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,170,181,186,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,248,249,250,251,252,253,254,255]});
i$(function pj_materialize(){return PjMaterializer.pj_materializeFromString_(this)});
i$(function pj_noneSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(item){if(true==$asNil$(aBlock).pj_value_(item))throw $_err_$=false;else return undefined});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_notEmpty(){return this!=""});
i$(function pj_notEmpty(){return this!=""});
i$(function pj_proxyResponse(){return ""+this});
i$(function pj_readStream(){return PjStringStream.pj_on_(this)});
i$(function pj_reject_(aBlock){return this.pj_select_(function(element){return $asNil$(aBlock).pj_value_(element)===false})});
i$(function pj_remove_(oldObject){var $_self_$=this;return this.pj_remove_ifAbsent_(oldObject,function(){return $_self_$.pj_errorNotFound_(oldObject)})});
i$(function pj_removeAll_(aCollection){var $_self_$=this;if(aCollection===this)return this.pj_removeAll();$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_remove_(each)});return aCollection});
i$(function pj_replaceFrom_to_with_(start,stop,replacement){if(false==$asNil$($asNil$(replacement).pj_size()).pj_61_($asNil$(stop).pj_45_(start)+1))this.pj_error_("Size of replacement doesnt match");return this.pj_replaceFrom_to_with_startingAt_(start,stop,replacement,1)});
i$(function pj_replaceFrom_to_with_startingAt_(start,stop,replacement,repStart){var repl=[],isString=typeof replacement=="string";
for(var mine=stop-1,other=mine+repStart-start;
mine>=start-1;
--other,--mine
)repl[other]=isString?replacement[other]:String.fromCharCode(replacement[other]);
return this.substring(0,start-1)+repl.join("")+this.substr(stop)});
i$(function pj_reverseDo_(aBlock){var $_self_$=this;$asNil$(this.pj_size()).pj_to_by_do_(1,-1,function(index){return $asNil$(aBlock).pj_value_($_self_$.pj_at_(index))});return this});
i$(function pj_second(){return this[1]});
i$(function pj_select_(aBlock){var result=[];for(var i=0,max=this.length;i<max;++i){if(true==(typeof aBlock=="string"?$asNil$(this[i]).pj_perform_(aBlock):aBlock(this[i])))result.push(this[i])}return result});
i$(function pj_serializationContents(){return this});
i$(function pj_serializationContents(){return this});
i$(function pj_size(){return this.length});
i$(function pj_size(){return this.length});
i$(function pj_split_(anArray){return anArray.split(this)});
i$(function pj_third(){return this[2]});
i$(function pj_to_(other){return $asNil$($asNil$(this.pj_asciiValue()).pj_to_($asNil$(other).pj_asciiValue())).pj_collect_(function(ascii){return String.pj_value_(ascii)})});
i$(function pj_value(){return ""+this});
i$(function pj_with_do_(otherCollection,aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i],otherCollection[i]);return this});
i$(function pj_withIndexDo_(aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i],i+1);return this});
i$(function pj_writeStream(){return PjStringStream.pj_new()});
i$(function pj_126_61_(other){return this!=other});
c$(function pj_cr(){return this.pj_value_(13)});
c$(function pj_defaultSize(){return 10});
c$(function pj_escape(){return this.pj_value_(27)});
c$(function pj_fromByteArray_(aByteArray){return $asNil$(aByteArray).pj_asString()});
c$(function pj_lf(){return this.pj_value_(10)});
c$(function pj_linefeed(){return this.pj_value_(10)});
c$(function pj_new(){return ""});
c$(function pj_new_(ignored){return this.pj_new()});
c$(function pj_newFrom_(aCollection){var newCollection;newCollection=this.pj_new_($asNil$(aCollection).pj_size());$asNil$(newCollection).pj_addAll_(aCollection);return newCollection});
c$(function pj_newFromMaterialized_(materializedObject){return materializedObject});
c$(function pj_newFromMaterialized_(materializedObject){return materializedObject});
c$(function pj_space(){return this.pj_value_(32)});
c$(function pj_streamContents_(aBlock){var stream;stream=PjStringStream.pj_new();$asNil$(aBlock).pj_value_(stream);return $asNil$(stream).pj_contents()});
c$(function pj_stringHash_initialHash_(aString,speciesHash){var stringSize,hash,low;stringSize=$asNil$(aString).pj_size();hash=$asNil$(speciesHash).pj_bitAnd_(268435455);(1).pj_to_do_(stringSize,function(pos){hash=$asNil$(hash).pj_43_($asNil$(aString).pj_basicAt_(pos));low=$asNil$(hash).pj_bitAnd_(16383);return hash=$asNil$($asNil$((9741*low)).pj_43_($asNil$($asNil$((9741*$asNil$(hash).pj_47_47_(16384))).pj_43_(101*low)).pj_bitAnd_(16383)*16384)).pj_bitAnd_(268435455)});return hash});
c$(function pj_tab(){return this.pj_value_(9)});
c$(function pj_value_(anInteger){return String.fromCharCode(anInteger)});
c$(function pj_with_(anObject){var newCollection;newCollection=this.pj_new_(1);$asNil$(newCollection).pj_at_put_(1,anObject);return newCollection});
c$(function pj_with_with_(firstObject,secondObject){var newCollection;newCollection=this.pj_new_(2);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);return newCollection});
c$(function pj_with_with_with_(firstObject,secondObject,thirdObject){var newCollection;newCollection=this.pj_new_(3);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);$asNil$(newCollection).pj_at_put_(3,thirdObject);return newCollection});
c$(function pj_with_with_with_with_(firstObject,secondObject,thirdObject,fourthObject){var newCollection;newCollection=this.pj_new_(4);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);$asNil$(newCollection).pj_at_put_(3,thirdObject);$asNil$(newCollection).pj_at_put_(4,fourthObject);return newCollection});
c$(function pj_withAll_(aCollection){var $1;return ($1=$asNil$(this.pj_new_($asNil$(aCollection).pj_size())),$1.pj_addAll_(aCollection),$1.pj_yourself())});
})
Object.pj_subclass_("PjRectangle");
PjRectangle.$$def(function(i$,c$,cp$){
i$(function pj_containsPoint_(aPoint){if(this.origin<=aPoint)return aPoint<this.corner;else return false});
i$(function pj_setPoint_point_(pt1,pt2){this.origin=$asNil$($asNil$($asNil$(pt1).pj_x()).pj_min_($asNil$(pt2).pj_x())).pj_64_($asNil$($asNil$(pt1).pj_y()).pj_min_($asNil$(pt2).pj_y()));this.corner=$asNil$($asNil$($asNil$(pt1).pj_x()).pj_max_($asNil$(pt2).pj_x())).pj_64_($asNil$($asNil$(pt1).pj_y()).pj_max_($asNil$(pt2).pj_y()));return this});
c$(function pj_origin_corner_(originPoint,cornerPoint){return $asNil$(this.pj_basicNew()).pj_setPoint_point_(originPoint,cornerPoint)});
})
Object.pj_subclass_("Number");
Number.$$def(function(i$,c$,cp$,$Float){
i$(function pj_37_(anObject){return Math.sign(anObject)*(Math.abs(this) % anObject)});
i$(function pj_42_(anObject){return this * anObject;});
i$(function pj_43_(anObject){return this + anObject;});
i$(function pj_45_(anObject){return this - anObject;});
i$(function pj_47_(anObject){if(anObject==0) return ZeroDivide.pj_signal();return this / anObject;});
i$(function pj_47_47_(anObject){return $asNil$(Math).pj_floor_(this.pj_47_(anObject))});
i$(function pj_60_(other){return this < other});
i$(function pj_60_(other){return this < other});
i$(function pj_60_61_(aMagnitude){return $asNil$((this>aMagnitude)).pj_not()});
i$(function pj_61_(other){return this == other});
i$(function pj_61_(other){return this == other});
i$(function pj_61_61_(other){return this == other});
i$(function pj_62_(aMagnitude){return aMagnitude<this});
i$(function pj_62_61_(aMagnitude){return aMagnitude<=this});
i$(function pj_64_(y){return Point.pj_x_y_(this,y)});
i$(function pj_92_92_(anObject){return this.pj_37_(anObject)});
i$(function pj_abs(){return Math.abs(this);});
i$(function pj_arcCos(){return Math.acos(this);});
i$(function pj_arcSin(){return Math.asin(this);});
i$(function pj_arcTan(){return Math.atan(this);});
i$(function pj_arcTan_(denominator){return Math.atan2(this,denominator);});
i$(function pj_asCharacter(){return String.pj_value_(this)});
i$(function pj_asFloat(){return +this});
i$(function pj_asInteger(){return this.pj_truncated()});
i$(function pj_asNumber(){return this});
i$(function pj_asString(){return this + ""});
i$(function pj_basicIdentityHash(){return this});
i$(function pj_between_and_(min,max){if(this>=min)return this<=max;else return false});
i$(function pj_bitAnd_(arg){return this&arg});
i$(function pj_bitInvert(){return ~this});
i$(function pj_bitOr_(arg){return this|arg});
i$(function pj_bitShift_(shiftCount){if (shiftCount<0) return this>>(-shiftCount);return this<<shiftCount});
i$(function pj_bitXor_(arg){return this^arg});
i$(function pj_ch(){return this + "ch"});
i$(function pj_cm(){return this + "cm"});
i$(function pj_compareWith_ifLesser_ifEqual_ifGreater_(anotherMagnitude,lesserBlock,equalBlock,greaterBlock){var $_self_$=this;return $asNil$((this<anotherMagnitude)).pj_ifTrue_ifFalse_(lesserBlock,function(){return $asNil$(($_self_$==anotherMagnitude)).pj_ifTrue_ifFalse_(equalBlock,greaterBlock)})});
i$(function pj_cos(){return Math.cos(this);});
i$(function pj_day(){return this.pj_days()});
i$(function pj_days(){return PjDuration.pj_days_(this)});
i$(function pj_degreesToRadians(){return this.pj_42_(cp$.RadiansPerDegree)});
i$(function pj_em(){return this + "em"});
i$(function pj_even(){return this%2==0});
i$(function pj_ex(){return this + "ex"});
i$(function pj_exp(){return Math.exp(this);});
i$(function pj_floorLog_(radix){return $asNil$(this.pj_log_(radix)).pj_floor()});
i$(function pj_fractionPart(){return this.pj_45_(this.pj_integerPart())});
i$(function pj_hash(){return this});
i$(function pj_hashMultiply(){var low;low=this.pj_bitAnd_(16383);return $asNil$($asNil$((9741*low)).pj_43_($asNil$($asNil$((9741*this.pj_bitShift_(-14))).pj_43_(101*low)).pj_bitAnd_(16383)*16384)).pj_bitAnd_(268435455)});
i$(function pj_highBit(){if(this<0)return this.pj_error_("highBit is not defined for negative integers");return this.pj_highBitOfPositiveReceiver()});
i$(function pj_highBitOfPositiveReceiver(){var shifted,bitNo;shifted=this;bitNo=0;while(65536<shifted){shifted=$asNil$(shifted).pj_bitShift_(-16);bitNo=bitNo+16}if(256<shifted){shifted=$asNil$(shifted).pj_bitShift_(-8);bitNo=bitNo+8}if(16<shifted){shifted=$asNil$(shifted).pj_bitShift_(-4);bitNo=bitNo+4}if(4<shifted){shifted=$asNil$(shifted).pj_bitShift_(-2);bitNo=bitNo+2}if(2<shifted){shifted=$asNil$(shifted).pj_bitShift_(-1);bitNo=bitNo+1}return $asNil$(shifted).pj_43_(bitNo)});
i$(function pj_hour(){return this.pj_hours()});
i$(function pj_hours(){return PjDuration.pj_hours_(this)});
i$(function pj_identityHash(){return this.pj_hashMultiply()});
i$(function pj_in(){return this + "in"});
i$(function pj_integerPart(){return this.pj_truncated()});
i$(function pj_isFloat(){return $asNil$(this.pj_isInteger()).pj_not()});
i$(function pj_isInfinite(){if(this==$Float.Infinity)return true;else return this==$Float.NegativeInfinity});
i$(function pj_isInteger(){return (this|0)==this});
i$(function pj_isJSPrimitiveType(){return true});
i$(function pj_isNaN(){return isNaN(this)});
i$(function pj_isNumber(){return true});
i$(function pj_isZero(){return this==0});
i$(function pj_ln(){return Math.log(this);});
i$(function pj_log(){return Math.log10(this);});
i$(function pj_log_(aNumber){return $asNil$(this.pj_ln()).pj_47_($asNil$(aNumber).pj_ln())});
i$(function pj_lowBit(){var n,result;n=this;if(n==0)return 0;result=1;while($asNil$(n).pj_bitAnd_(255)==0){result=result+8;n=$asNil$(n).pj_bitShift_(-8)}while($asNil$(n).pj_bitAnd_(1)==0){result=result+1;n=$asNil$(n).pj_bitShift_(-1)}return result});
i$(function pj_max_(aMagnitude){if(this>aMagnitude)return this;else return aMagnitude});
i$(function pj_milliSecond(){return this.pj_milliSeconds()});
i$(function pj_milliSeconds(){return PjDuration.pj_milliSeconds_(this)});
i$(function pj_min_(aMagnitude){if(this<aMagnitude)return this;else return aMagnitude});
i$(function pj_min_max_(aMin,aMax){return $asNil$(this.pj_min_(aMin)).pj_max_(aMax)});
i$(function pj_minute(){return this.pj_minutes()});
i$(function pj_minutes(){return PjDuration.pj_minutes_(this)});
i$(function pj_mm(){return this + "mm"});
i$(function pj_month(){return this.pj_months()});
i$(function pj_months(){return PjDuration.pj_months_(this)});
i$(function pj_negated(){return 0-this});
i$(function pj_negative(){return this<0});
i$(function pj_odd(){return this.pj_even()===false});
i$(function pj_pc(){return this + "pc"});
i$(function pj_percnt(){return this + "%"});
i$(function pj_positive(){return this>=0});
i$(function pj_proxyResponse(){return 0+this});
i$(function pj_pt(){return this + "pt"});
i$(function pj_px(){return this + "px"});
i$(function pj_quo_(aNumber){return $asNil$(this.pj_47_(aNumber)).pj_truncated()});
i$(function pj_raisedTo_(aNumber){if(true==$asNil$(aNumber).pj_isInteger())return this.pj_raisedToInteger_(aNumber);if(true==$asNil$(aNumber).pj_isFraction())return this.pj_raisedToFraction_(aNumber);if(this<0)return ArithmeticError.pj_signal_("Negative numbers can't be raised to float powers.");if(0==aNumber)return $asNil$(this.pj_class()).pj_one();if(1==aNumber)return this;if(0==this)if(aNumber<0)return $asNil$(ZeroDivide.pj_dividend_(1)).pj_signal();else return this;return $asNil$($asNil$(aNumber).pj_42_(this.pj_ln())).pj_exp()});
i$(function pj_raisedToInteger_(anInteger){var bitProbe,result;if(true==$asNil$(anInteger).pj_negative())return $asNil$(this.pj_raisedToInteger_($asNil$(anInteger).pj_negated())).pj_reciprocal();bitProbe=(1).pj_bitShift_($asNil$(anInteger).pj_highBit()-1);result=$asNil$(this.pj_class()).pj_one();while(true==(($asNil$(anInteger).pj_bitAnd_(bitProbe)==0?undefined:(result=$asNil$(result).pj_42_(this))),(bitProbe=$asNil$(bitProbe).pj_bitShift_(-1)),bitProbe>0)){result=$asNil$(result).pj_42_(result)}return result});
i$(function pj_reciprocal(){return (1).pj_47_(this)});
i$(function pj_rem(){return this + "rem"});
i$(function pj_rem_(aNumber){return this.pj_45_($asNil$(this.pj_quo_(aNumber)).pj_42_(aNumber))});
i$(function pj_rounded(){if($asNil$(this.pj_fractionPart()).pj_abs()<0.5)return this.pj_truncated();else return $asNil$(this.pj_truncated()).pj_43_($asNil$(this.pj_sign()).pj_rounded())});
i$(function pj_second(){return this.pj_seconds()});
i$(function pj_seconds(){return PjDuration.pj_seconds_(this)});
i$(function pj_serializationContents(){return this});
i$(function pj_sign(){return Math.sign(this);});
i$(function pj_sin(){return Math.sin(this);});
i$(function pj_sqrt(){return Math.sqrt(this);});
i$(function pj_squared(){return this.pj_42_(this)});
i$(function pj_strictlyPositive(){return this>0});
i$(function pj_tan(){return Math.tan(this);});
i$(function pj_timesRepeat_(aBlock){(1).pj_to_do_(this,aBlock);return this});
i$(function pj_to_(end){var interval;interval=Array.pj_new();this.pj_to_by_do_(end,1,function(each){return $asNil$(interval).pj_add_(each)});return interval});
i$(function pj_to_by_do_(end,step,aBlock){for(var i=this; i <= end; i += step){aBlock(i);}});
i$(function pj_to_do_(end,aBlock){this.pj_to_by_do_(end,1,aBlock);return this});
i$(function pj_truncated(){if (this>=0)return Math.floor(this);return Math.ceil(this)});
i$(function pj_value(){return 0+this});
i$(function pj_vh(){return this + "vh"});
i$(function pj_vmax(){return this + "vmax"});
i$(function pj_vmin(){return this + "vmin"});
i$(function pj_vw(){return this + "vw"});
i$(function pj_week(){return this.pj_weeks()});
i$(function pj_weeks(){return PjDuration.pj_weeks_(this)});
i$(function pj_year(){return this.pj_years()});
i$(function pj_years(){return PjDuration.pj_years_(this)});
i$(function pj_124_(anObject){return this | anObject;});
i$(function pj_126_61_(other){return this != other});
c$(function pj_denormalized(){return true});
c$(function pj_e(){return $Float.E});
c$(function pj_emax(){return 1023});
c$(function pj_emin(){return -1022});
c$(function pj_epsilon(){return 1.0.pj_timesTwoPower_(1-this.pj_precision())});
c$(function pj_fmax(){return $Float.MaxVal});
c$(function pj_fmin(){if(true==this.pj_denormalized())return this.pj_fminDenormalized();else return this.pj_fminNormalized()});
c$(function pj_fminDenormalized(){return 1.0.pj_timesTwoPower_($Float.MinValLogBase2)});
c$(function pj_fminNormalized(){return 1.0.pj_timesTwoPower_(-1022)});
c$(function pj_halfPi(){return $Float.Halfpi});
c$(function pj_infinity(){return $Float.Infinity});
c$(function pj_javascriptInitialize(){cp$.Pi=$asNil$(Math).pj_instVarNamed_("PI");cp$.Halfpi=$asNil$(cp$.Pi).pj_47_(2.0);cp$.Twopi=cp$.Pi*2.0;cp$.ThreePi=cp$.Pi*3.0;cp$.RadiansPerDegree=$asNil$(cp$.Pi).pj_47_(180.0);cp$.Ln2=$asNil$(Math).pj_instVarNamed_("LN2");cp$.Ln10=$asNil$(Math).pj_instVarNamed_("LN10");cp$.Sqrt2=$asNil$(Math).pj_instVarNamed_("SQRT2");cp$.E=$asNil$(Math).pj_instVarNamed_("E");cp$.Epsilon=1.0e-12;cp$.MaxVal=Number.pj_instVarNamed_("MAX_VALUE");cp$.MaxValLn=709.782712893384;cp$.MinValLogBase2=-1074;cp$.Infinity=Number.pj_instVarNamed_("POSITIVE_INFINITY");cp$.NegativeInfinity=Number.pj_instVarNamed_("NEGATIVE_INFINITY");cp$.NaN=Number.pj_instVarNamed_("NaN");cp$.NegativeZero=1.0.pj_47_(cp$.NegativeInfinity);return this});
c$(function pj_maxExactInteger(){return (1).pj_bitShift_(this.pj_precision())});
c$(function pj_nan(){return $Float.NaN});
c$(function pj_negativeInfinity(){return $Float.NegativeInfinity});
c$(function pj_negativeZero(){return $Float.NegativeZero});
c$(function pj_newFromMaterialized_(materializedObject){return materializedObject});
c$(function pj_one(){return 1});
c$(function pj_one(){return 1.0});
c$(function pj_pi(){return $Float.Pi});
c$(function pj_precision(){return 53});
c$(function pj_radix(){return 2});
c$(function pj_threePi(){return $Float.ThreePi});
c$(function pj_twoPi(){return $Float.Twopi});
c$(function pj_zero(){return 0.0});
cp$.E=cp$.Epsilon=cp$.Halfpi=cp$.Infinity=cp$.Ln10=cp$.Ln2=cp$.MaxVal=cp$.MaxValLn=cp$.MinValLogBase2=cp$.NaN=cp$.NegativeInfinity=cp$.NegativeZero=cp$.Pi=cp$.RadiansPerDegree=cp$.Sqrt2=cp$.ThreePi=cp$.Twopi=null;
},Number)
Object.pj_subclass_("Function");
Function.$$def(function(i$,c$,cp$){
i$(function pj_assert(){if(false==this.pj_value())AssertionFailure.pj_signal_("Assertion failed");return this});
i$(function pj_basicNew(){return new this()});
i$(function pj_basicNew_(arg){return new this(arg)});
i$(function pj_basicNew_with_(arg1,arg2){return new this(arg1, arg2)});
i$(function pj_basicNew_with_with_(arg1,arg2,arg3){return new this(arg1, arg2, arg3)});
i$(function pj_basicNew_with_with_with_(arg1,arg2,arg3,arg4){return new this(arg1, arg2, arg3, arg4)});
i$(function pj_basicNew_with_with_with_with_(arg1,arg2,arg3,arg4,arg5){return new this(arg1, arg2, arg3, arg4, arg5)});
i$(function pj_canUnderstand_(selector){var jsSelector;jsSelector=Smalltalk.pj_makePharoJsSelector_(selector);if((selct=(this.pj_prototype())[jsSelector])==undefined)return false;else return "__DNU"!=selct.name});
i$(function pj_close(){Smalltalk.pj_log_("unoptimized close may not capture semantics");return this});
i$(function pj_cull_(arg){return this.pj_value_(arg)});
i$(function pj_cull_cull_(arg1,arg2){return this.pj_value_value_(arg1,arg2)});
i$(function pj_cull_cull_cull_(arg1,arg2,arg3){return this.pj_value_value_value_(arg1,arg2,arg3)});
i$(function pj_cull_cull_cull_cul_(arg1,arg2,arg3,arg4){return this.pj_value_value_value_value_(arg1,arg2,arg3,arg4)});
i$(function pj_ensure_(aBlock){try{
return this()
}finally{aBlock()}});
i$(function pj_ifCurtailed_(curtailBlock){var result,curtailed,$_self_$=this;curtailed=true;(function(){result=$_self_$.pj_value();return curtailed=false}).pj_ensure_(function(){if(true==curtailed)return $asNil$(curtailBlock).pj_value();else return undefined});return result});
i$(function pj_inheritsFrom_(aClass){var aSuperclass;aSuperclass=this.pj_superclass();while(aSuperclass!==undefined){if(aSuperclass===aClass)return true;aSuperclass=$asNil$(aSuperclass).pj_superclass()}return false});
i$(function pj_isBlock(){return true});
i$(function pj_new(){var $1;return ($1=$asNil$(this.pj_basicNew()),$1.pj_initialize(),$1.pj_yourself())});
i$(function pj_new_(arg){var $1;return ($1=$asNil$(this.pj_basicNew_(arg)),$1.pj_initialize(),$1.pj_yourself())});
i$(function pj_new_with_(arg1,arg2){var $1;return ($1=$asNil$(this.pj_basicNew_with_(arg1,arg2)),$1.pj_initialize(),$1.pj_yourself())});
i$(function pj_new_with_with_(arg1,arg2,arg3){var $1;return ($1=$asNil$(this.pj_basicNew_with_with_(arg1,arg2,arg3)),$1.pj_initialize(),$1.pj_yourself())});
i$(function pj_new_with_with_with_(arg1,arg2,arg3,arg4){var $1;return ($1=$asNil$(this.pj_basicNew_with_with_with_(arg1,arg2,arg3,arg4)),$1.pj_initialize(),$1.pj_yourself())});
i$(function pj_new_with_with_with_with_(arg1,arg2,arg3,arg4,arg5){var $1;return ($1=$asNil$(this.pj_basicNew_with_with_with_with_(arg1,arg2,arg3,arg4,arg5)),$1.pj_initialize(),$1.pj_yourself())});
i$(function pj_on_do_(exception,handlerAction){try{
return this()
}catch(ex){
if(ex.pj_isKindOf_(exception)){return handlerAction(ex)}
throw ex
}});
i$(function pj_superclass(){if(this===Object)return undefined;return $asNil$(this.prototype.__proto__).pj_class()});
i$(function pj_value(){return this();});
i$(function pj_value_(arg){return this(arg);});
i$(function pj_value_value_(arg1,arg2){return this(arg1, arg2);});
i$(function pj_value_value_value_(arg1,arg2,arg3){return this(arg1, arg2, arg3);});
i$(function pj_value_value_value_value_(arg1,arg2,arg3,arg4){return this(arg1, arg2, arg3, arg4);});
i$(function pj_valueWithArguments_(anArray){return this.apply(this,anArray)});
i$(function pj_valueWithEnoughArguments_(anArray){return this.apply(this,anArray)});
i$(function pj_whileFalse(){this.pj_whileFalse_(function(){return undefined});return this});
i$(function pj_whileFalse_(loopBlock){while(false==this()){loopBlock();}});
i$(function pj_whileTrue(){this.pj_whileTrue_(function(){return undefined});return this});
i$(function pj_whileTrue_(loopBlock){while(true==this()){loopBlock();}});
c$(function pj_forceSubclass_(aFunction){aFunction.__proto__=this.prototype;return this});
})
Object.pj_subclass_("Boolean");
Boolean.$$def(function(i$,c$,cp$){
i$(function pj_38_(aBoolean){if(true==this)return aBoolean;else return false});
i$(function pj_61_(other){return this==Boolean(other)});
i$(function pj_61_61_(other){return this==other});
i$(function pj_61_61_62_(aBlock){if(true==this.pj_not())return true;else return $asNil$(aBlock).pj_value()});
i$(function pj_and_(aBlock){if(this==true){return aBlock();}else{return false;}});
i$(function pj_asBit(){return this + 0});
i$(function pj_asJsObject(){return this == true});
i$(function pj_asString(){return this + ""});
i$(function pj_eqv_(aBoolean){return this===aBoolean});
i$(function pj_identityHash(){if(this == true){
return 971382272;}
return 855186944});
i$(function pj_ifFalse_(aBlock){return this.pj_ifTrue_ifFalse_(function(){return undefined},aBlock)});
i$(function pj_ifFalse_ifTrue_(falseBlock,trueBlock){return this.pj_ifTrue_ifFalse_(trueBlock,falseBlock)});
i$(function pj_ifTrue_(aBlock){return this.pj_ifTrue_ifFalse_(aBlock,function(){return undefined})});
i$(function pj_ifTrue_ifFalse_(trueBlock,falseBlock){if(this==true){return typeof trueBlock=="function"?trueBlock():trueBlock}else{return typeof falseBlock=="function"?falseBlock():falseBlock}});
i$(function pj_isJSPrimitiveType(){return true});
i$(function pj_not(){if(true==this)return false;else return true});
i$(function pj_or_(aBlock){if(this==true){return true}else{return aBlock()}});
i$(function pj_proxyResponse(){return true==this});
i$(function pj_serializationContents(){return this});
i$(function pj_value(){return true==this});
i$(function pj_xor_(aBoolean){if(true==this)return $asNil$($asNil$(aBoolean).pj_value()).pj_not();else return $asNil$(aBoolean).pj_value()});
i$(function pj_124_(aBoolean){if(true==this)return true;else return aBoolean});
i$(function pj_126_126_(other){return this!=other});
c$(function pj_newFromMaterialized_(materializedObject){return materializedObject});
})
Object.pj_subclass_("Array");
Array.$$def(function(i$,c$,cp$){
i$(function pj_44_(other){var $1;return ($1=$asNil$($asNil$(this.pj_class()).pj_new()),$1.pj_addAll_(this),$1.pj_addAll_(other),$1.pj_yourself())});
i$(function pj_61_(anArray){var $_err_$={};try{if(false==$asNil$(this.pj_size()).pj_61_($asNil$(anArray).pj_size()))return false;this.pj_with_do_(anArray,function(myElement,otherElement){if(true==$asNil$(myElement).pj_61_(otherElement))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_add_(x){return this.pj_addLast_(x)});
i$(function pj_addAll_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_add_(each)});return aCollection});
i$(function pj_addAllLast_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_addLast_(each)});return aCollection});
i$(function pj_addFirst_(x){this.unshift(x);return x});
i$(function pj_addLast_(x){this.push(x);return x});
i$(function pj_allButFirst(){return this.pj_allButFirst_(1)});
i$(function pj_allButFirst_(n){return this.pj_copyFrom_to_(n+1,this.pj_size())});
i$(function pj_allButLast(){return this.pj_allButLast_(1)});
i$(function pj_allButLast_(n){return this.pj_copyFrom_to_(1,$asNil$(this.pj_size()).pj_45_(n))});
i$(function pj_allSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_anySatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=true;else return undefined});return false}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_appendTo_(aCollection){return $asNil$(aCollection).pj_addAllLast_(this)});
i$(function pj_asDictionary(){return this.pj_as_(PjDictionary)});
i$(function pj_asJsObject(){var jsObject;if(true==(true==this.pj_notEmpty()&&$asNil$($asNil$(this.pj_first()).pj_isKindOf_(PjAssociation)).pj_not()))return this;jsObject=Object.pj_new();this.pj_do_(function(association){return $asNil$(jsObject).pj_at_put_($asNil$(association).pj_key(),$asNil$($asNil$(association).pj_value()).pj_asJsObject())});return jsObject});
i$(function pj_asOrderedCollection(){return this.pj_as_(Array)});
i$(function pj_asSet(){return PjSet.pj_withAll_(this)});
i$(function pj_asString(){return $asNil$(String.pj_new_(this.pj_size())).pj_replaceFrom_to_with_(1,this.pj_size(),this)});
i$(function pj_associationsDo_(aBlock){this.pj_do_(aBlock);return this});
i$(function pj_at_(i){return this[i-1]});
i$(function pj_at_ifAbsent_(index,aBlock){if(true==(index>0&&index>this.pj_size()))return $asNil$(aBlock).pj_value();return this.pj_at_(index)});
i$(function pj_at_put_(i,x){return this[i-1]=x});
i$(function pj_atRandom(){var randomIndex = Math.floor((Math.random() * this.pj_size()) + 1);
return this.pj_at_(randomIndex);});
i$(function pj_collect_(aBlock){var result=[];for(var i=0,max=this.length;i<max;++i)result.push(typeof aBlock=="string"?$asNil$(this[i]).pj_perform_(aBlock):aBlock(this[i]));return result});
i$(function pj_copyFrom_to_(start,stop){var newSize;newSize=$asNil$(stop).pj_45_(start)+1;return $asNil$($asNil$(this.pj_species()).pj_new_(newSize)).pj_replaceFrom_to_with_startingAt_(1,newSize,this,start)});
i$(function pj_copyReplaceFrom_to_with_(start,stop,replacementCollection){var newSequenceableCollection,newSize,endReplacement;newSize=$asNil$($asNil$(this.pj_size()).pj_45_($asNil$(stop).pj_45_(start)+1)).pj_43_($asNil$(replacementCollection).pj_size());endReplacement=$asNil$((start-1)).pj_43_($asNil$(replacementCollection).pj_size());newSequenceableCollection=$asNil$(this.pj_species()).pj_new_(newSize);if(start>1)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(1,start-1,this,1);if(start<=endReplacement)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(start,endReplacement,replacementCollection,1);if(endReplacement<newSize)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(endReplacement+1,newSize,this,stop+1);return newSequenceableCollection});
i$(function pj_copyWith_(newElement){var newIC;newIC=$asNil$(this.pj_species()).pj_new_(this.pj_size()+1);$asNil$(newIC).pj_replaceFrom_to_with_startingAt_(1,this.pj_size(),this,1);$asNil$(newIC).pj_at_put_($asNil$(newIC).pj_size(),newElement);return newIC});
i$(function pj_copyWithFirst_(newElement){var newIC;newIC=$asNil$(this.pj_species()).pj_ofSize_(this.pj_size()+1);$asNil$(newIC).pj_replaceFrom_to_with_startingAt_(2,this.pj_size()+1,this,1);$asNil$(newIC).pj_at_put_(1,newElement);return newIC});
i$(function pj_copyWithoutIndex_(index){var copy;copy=$asNil$(this.pj_species()).pj_ofSize_(this.pj_size()-1);$asNil$(copy).pj_replaceFrom_to_with_startingAt_(1,index-1,this,1);$asNil$(copy).pj_replaceFrom_to_with_startingAt_(index,$asNil$(copy).pj_size(),this,index+1);return copy});
i$(function pj_detect_ifFound_(aBlock,foundBlock){this.pj_detect_ifFound_ifNone_(aBlock,foundBlock,function(){return undefined});return this});
i$(function pj_detect_ifFound_ifNone_(aBlock,foundBlock,exceptionBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=$asNil$(foundBlock).pj_cull_(each);else return undefined});return $asNil$(exceptionBlock).pj_value()}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_detect_ifNone_(aBlock,exceptionBlock){return this.pj_detect_ifFound_ifNone_(aBlock,function(element){return element},exceptionBlock)});
i$(function pj_do_(aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i]);return this});
i$(function pj_do_separatedBy_(elementBlock,separatorBlock){for(var i=0,max=this.length;i<max;++i){if(i)separatorBlock();elementBlock(this[i])};return this});
i$(function pj_doWithIndex_(elementAndIndexBlock){return this.pj_withIndexDo_(elementAndIndexBlock)});
i$(function pj_first(){return this[0]});
i$(function pj_from_to_put_(startIndex,endIndex,anObject){var written,toWrite,thisWrite;if(startIndex>endIndex)return this;this.pj_at_put_(startIndex,anObject);written=1;toWrite=$asNil$(endIndex).pj_45_(startIndex)+1;while(written<toWrite){thisWrite=$asNil$(written).pj_min_($asNil$(toWrite).pj_45_(written));this.pj_replaceFrom_to_with_startingAt_($asNil$(startIndex).pj_43_(written),$asNil$($asNil$(startIndex).pj_43_(written)).pj_43_(thisWrite)-1,this,startIndex);written=$asNil$(written).pj_43_(thisWrite)}return anObject});
i$(function pj_grownBy_(length){var newCollection,size;size=this.pj_size();newCollection=$asNil$(this.pj_species()).pj_ofSize_($asNil$(size).pj_43_(length));$asNil$(newCollection).pj_replaceFrom_to_with_startingAt_(1,size,this,1);return newCollection});
i$(function pj_ifEmpty_(aBlock){if(true==this.pj_isEmpty())return $asNil$(aBlock).pj_value();return this});
i$(function pj_includes_(x){if (x.pj_isJSPrimitiveType()) {
if (this.includes(x)) return true;
for(var i=this.length-1;i>=0;--i) if (x==this[i]) return true;
return false}
for(var i=this.length-1;i>=0;--i) if (x.pj_61_(this[i])) return true;
return false});
i$(function pj_includesAll_(aCollection){var $_self_$=this;var $_err_$={};try{$asNil$(aCollection).pj_do_(function(elem){if(true==$_self_$.pj_includes_(elem))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_indexOf_(x){return this.indexOf(x)+1});
i$(function pj_inject_into_(thisValue,binaryBlock){var nextValue;nextValue=thisValue;this.pj_do_(function(each){return nextValue=$asNil$(binaryBlock).pj_value_value_(nextValue,each)});return nextValue});
i$(function pj_insert_before_(anObject,spot){this.splice(spot-1, 0, anObject);return anObject});
i$(function pj_isArray(){return true});
i$(function pj_isCollection(){return true});
i$(function pj_isEmpty(){return this.pj_size()==0});
i$(function pj_isEmptyOrNil(){return this.pj_isEmpty()});
i$(function pj_join_(aCollection){var result,$_self_$=this;result=$asNil$(this.pj_class()).pj_new();$asNil$(aCollection).pj_do_separatedBy_(function(each){return $asNil$(each).pj_appendTo_(result)},function(){return $_self_$.pj_appendTo_(result)});return result});
i$(function pj_last(){return this[this.length-1]});
i$(function pj_materialize(){return PjMaterializer.pj_materializeFromArray_(this)});
i$(function pj_noneSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(item){if(true==$asNil$(aBlock).pj_value_(item))throw $_err_$=false;else return undefined});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_notEmpty(){return this.length!=0});
i$(function pj_readStream(){return PjArrayStream.pj_on_(this)});
i$(function pj_reject_(aBlock){return this.pj_select_(function(element){return $asNil$(aBlock).pj_value_(element)===false})});
i$(function pj_remove_(oldObject){var $_self_$=this;return this.pj_remove_ifAbsent_(oldObject,function(){return $_self_$.pj_errorNotFound_(oldObject)})});
i$(function pj_remove_ifAbsent_(oldObject,absentBlock){var index;index=this.pj_findIndex_(function(each){return $asNil$(oldObject).pj_61_(each)});if(index>=0)return this.pj_removeAt_(index+1);return $asNil$(absentBlock).pj_value()});
i$(function pj_removeAll(){for(var $1=1,$2=this.pj_size();$1<=$2;++$1){this.pj_removeFirst()}return this});
i$(function pj_removeAll_(aCollection){var $_self_$=this;if(aCollection===this)return this.pj_removeAll();$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_remove_(each)});return aCollection});
i$(function pj_removeAt_(aNumber){var result=this[aNumber-1];this.splice(aNumber - 1,1);return result});
i$(function pj_removeFirst(){return this.shift()});
i$(function pj_removeLast(){return this.pop()});
i$(function pj_replaceFrom_to_with_(start,stop,replacement){if(false==$asNil$($asNil$(replacement).pj_size()).pj_61_($asNil$(stop).pj_45_(start)+1))this.pj_error_("Size of replacement doesnt match");return this.pj_replaceFrom_to_with_startingAt_(start,stop,replacement,1)});
i$(function pj_replaceFrom_to_with_startingAt_(start,stop,replacement,repStart){for(var mine=stop-1,other=mine+repStart-start;
mine>=start-1;
--other,--mine
)this[mine]=replacement[other];return this});
i$(function pj_reverseDo_(aBlock){var $_self_$=this;$asNil$(this.pj_size()).pj_to_by_do_(1,-1,function(index){return $asNil$(aBlock).pj_value_($_self_$.pj_at_(index))});return this});
i$(function pj_second(){return this[1]});
i$(function pj_select_(aBlock){var result=[];for(var i=0,max=this.length;i<max;++i){if(true==(typeof aBlock=="string"?$asNil$(this[i]).pj_perform_(aBlock):aBlock(this[i])))result.push(this[i])}return result});
i$(function pj_serializationContents(){var serializableElements;serializableElements=Array.pj_new();this.pj_do_(function(each){return $asNil$(serializableElements).pj_add_($asNil$(each).pj_serializationArray())});return serializableElements});
i$(function pj_size(){return this.length});
i$(function pj_third(){return this[2]});
i$(function pj_with_do_(otherCollection,aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i],otherCollection[i]);return this});
i$(function pj_withIndexDo_(aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i],i+1);return this});
i$(function pj_writeStream(){return PjArrayStream.pj_new()});
c$(function pj_new_(ignored){return this.pj_new()});
c$(function pj_newFrom_(aCollection){var newCollection;newCollection=this.pj_new_($asNil$(aCollection).pj_size());$asNil$(newCollection).pj_addAll_(aCollection);return newCollection});
c$(function pj_newFromMaterialized_(aJsonArray){var materializedArray;materializedArray=this.pj_new();$asNil$(aJsonArray).pj_do_(function(each){return $asNil$(materializedArray).pj_add_($asNil$(each).pj_materialize())});return materializedArray});
c$(function pj_streamContents_(aBlock){var stream;stream=PjArrayStream.pj_new();$asNil$(aBlock).pj_value_(stream);return $asNil$(stream).pj_contents()});
c$(function pj_with_(anObject){return [anObject]});
c$(function pj_with_with_(firstObject,secondObject){return [firstObject,secondObject]});
c$(function pj_with_with_with_(firstObject,secondObject,thirdObject){var newCollection;newCollection=this.pj_new_(3);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);$asNil$(newCollection).pj_at_put_(3,thirdObject);return newCollection});
c$(function pj_with_with_with_with_(firstObject,secondObject,thirdObject,fourthObject){var newCollection;newCollection=this.pj_new_(4);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);$asNil$(newCollection).pj_at_put_(3,thirdObject);$asNil$(newCollection).pj_at_put_(4,fourthObject);return newCollection});
c$(function pj_withAll_(aCollection){var $1;return ($1=$asNil$(this.pj_new_($asNil$(aCollection).pj_size())),$1.pj_addAll_(aCollection),$1.pj_yourself())});
})
PjReadWriteStream.pj_subclass_("PjStringStream");
PjStringStream.$$def(function(i$,c$,cp$){
i$(function pj_emptyCollection(){return ""});
i$(function pj_join(){return "".pj_join_(this.array)});
i$(function pj_nextPut_(aCharacter){$asNil$(this.array).pj_addLast_($asNil$(aCharacter).pj_asString());return aCharacter});
i$(function pj_nextPutAll_(aString){$asNil$(this.array).pj_addLast_(aString);return aString});
c$(function pj_on_(aCollection){return $asNil$(this.pj_new()).pj_on_(aCollection)});
})
PjMagnitude.pj_subclass_("PjLookupKey");
PjLookupKey.$$def(function(i$,c$,cp$){
i$(function pj_60_(aLookupKey){return this.key<$asNil$(aLookupKey).pj_key()});
i$(function pj_61_(aLookupKey){if(true==$asNil$(this.pj_species()).pj_61_($asNil$(aLookupKey).pj_species()))return $asNil$(this.key).pj_61_($asNil$(aLookupKey).pj_key());else return false});
i$(function pj_key(){return this.key});
i$(function pj_key_(anObject){this.key=anObject;return this});
c$(function pj_key_(aKey){return $asNil$(this.pj_basicNew()).pj_key_(aKey)});
})
Function.pj_subclass_("PjClass");
PjClass.$$def(function(i$,c$,cp$){
i$(function pj_adoptInstance_(anObject){anObject.__proto__=this.prototype;return this});
i$(function pj_allSubclasses(){var scan,scanTop;scan=Array.pj_withAll_(this.pj_subclasses());scanTop=1;while($asNil$(scan).pj_size()>scanTop){$asNil$(scan).pj_addAll_($asNil$($asNil$(scan).pj_at_(scanTop)).pj_subclasses());scanTop=scanTop+1}return scan});
i$(function pj_allSubclassesDo_(aBlock){this.pj_subclassesDo_(function(cl){$asNil$(aBlock).pj_value_(cl);return $asNil$(cl).pj_allSubclassesDo_(aBlock)});return this});
i$(function pj_class(){return Smalltalk.pj_metaclassOf_(this)});
i$(function pj_classVarNamed_(aString){return $asNil$(this.pj_classPool()).pj_at_(aString)});
i$(function pj_classVarNamed_put_(aString,otherString){$asNil$(this.pj_classPool()).pj_at_put_(aString,otherString);return this});
i$(function pj_classVarNames(){return $asNil$($asNil$(this.pj_classPool()).pj_keys()).pj_sort()});
i$(function pj_isBehavior(){return true});
i$(function pj_isBlock(){return false});
i$(function pj_isClass(){return true});
i$(function pj_name(){var s=this.name||this.prototype.toString();
if (s.substr(0,1)=="[") s=s.substr(8,s.length-9);
return s});
i$(function pj_newFromJsonString_(jsonString){var newInstance;newInstance=JSON.parse(jsonString);this.pj_adoptInstance_(newInstance);return newInstance});
i$(function pj_prototype(){return this.prototype});
i$(function pj_subclasses(){return this.subclasses});
i$(function pj_subclassesDo_(aBlock){$asNil$(this.pj_subclasses()).pj_do_(aBlock);return this});
i$(function pj_theMetaClass(){return this.pj_class()});
i$(function pj_theNonMetaClass(){return this});
})
Error.pj_subclass_("AssertionFailure");
AssertionFailure.$$def(function(i$,c$,cp$){
})
PjSharedPool.pj_subclass_("ChronologyConstants");
ChronologyConstants.$$def(function(i$,c$,cp$){
c$(function pj_initialize(){cp$.SqueakEpoch=2415386;cp$.SecondsInDay=86400;cp$.MicrosecondsInDay=cp$.SecondsInDay*1000000;cp$.SecondsInHour=3600;cp$.SecondsInMinute=60;cp$.NanosInSecond=(10).pj_raisedTo_(9);cp$.NanosInMillisecond=(10).pj_raisedTo_(6);cp$.DayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];cp$.MonthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];cp$.DaysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];return this});
cp$.DayNames=cp$.DaysInMonth=cp$.MicrosecondsInDay=cp$.MonthNames=cp$.NanosInMillisecond=cp$.NanosInSecond=cp$.SecondsInDay=cp$.SecondsInHour=cp$.SecondsInMinute=cp$.SqueakEpoch=null;
})
PjReadWriteStream.pj_subclass_("PjArrayStream");
PjArrayStream.$$def(function(i$,c$,cp$){
i$(function pj_emptyCollection(){return []});
i$(function pj_join(){var temp;temp=Array.pj_new();$asNil$(this.array).pj_do_(function(each){return $asNil$(each).pj_do_(function(element){return $asNil$(temp).pj_addLast_(element)})});return temp});
i$(function pj_nextPut_(aValue){$asNil$(this.array).pj_addLast_([aValue]);return aValue});
i$(function pj_nextPutAll_(aCollection){$asNil$(this.array).pj_addLast_(aCollection);return aCollection});
c$(function pj_on_(aCollection){return $asNil$(this.pj_new()).pj_on_(aCollection)});
})
PjCollection.pj_subclass_("PjDictionary");
PjDictionary.$$def(function(i$,c$,cp$){
i$(function pj_asDictionary(){return this});
i$(function pj_asJsObject(){var jsObject;jsObject=Object.pj_new();this.pj_keysAndValuesDo_(function(key,value){return $asNil$(jsObject).pj_at_put_(key,$asNil$(value).pj_asJsObject())});return jsObject});
i$(function pj_at_ifAbsentPut_(key,aBlock){var $_self_$=this;return this.pj_at_ifAbsent_(key,function(){return $_self_$.pj_at_put_(key,$asNil$(aBlock).pj_value())})});
i$(function pj_collect_(aBlock){var resultDict;resultDict=$asNil$(this.pj_class()).pj_new();this.pj_keysAndValuesDo_(function(key,value){return $asNil$(resultDict).pj_at_put_(key,$asNil$(aBlock).pj_value_(value))});return resultDict});
})
Array.pj_subclass_("PjSet");
PjSet.$$def(function(i$,c$,cp$){
i$(function pj_addFirst_(element){if(true==this.pj_includes_(element))return element;return Array.prototype.pj_addFirst_.call(this,element)});
i$(function pj_addLast_(element){if(true==this.pj_includes_(element))return element;return Array.prototype.pj_addLast_.call(this,element)});
i$(function pj_asSet(){return this});
})
Error.pj_subclass_("ArithmeticError");
ArithmeticError.$$def(function(i$,c$,cp$){
})
ArithmeticError.pj_subclass_("ZeroDivide");
ZeroDivide.$$def(function(i$,c$,cp$){
i$(function pj_dividend(){return this.dividend});
i$(function pj_dividend_(argument){this.dividend=argument;return this});
i$(function pj_isResumable(){return true});
c$(function pj_dividend_(argument){var $1;return ($1=$asNil$(this.pj_new()),$1.pj_dividend_(argument),$1.pj_yourself())});
c$(function pj_signalWithDividend_(aDividend){return $asNil$(this.pj_dividend_(aDividend)).pj_signal()});
})
PjLookupKey.pj_subclass_("PjAssociation");
PjAssociation.$$def(function(i$,c$,cp$){
i$(function pj_61_(anAssociation){if(PjLookupKey.prototype==anAssociation)return $asNil$(this.value).pj_61_($asNil$(anAssociation).pj_value());else return false});
i$(function pj_key_value_(aKey,anObject){this.key=aKey;this.value=anObject;return this});
i$(function pj_value(){return this.value});
i$(function pj_value_(anObject){this.value=anObject;return this});
c$(function pj_key_value_(newKey,newValue){return $asNil$(this.pj_basicNew()).pj_key_value_(newKey,newValue)});
})
PjMagnitude.pj_subclass_("PjDuration");
PjDuration.$$def(function(i$,c$,cp$,$ChronologyConstants){
i$(function pj_42_(operand){return $asNil$(this.pj_class()).pj_nanoSeconds_($asNil$($asNil$(this.pj_asNanoSeconds()).pj_42_(operand)).pj_asInteger())});
i$(function pj_43_(operand){return $asNil$(this.pj_class()).pj_nanoSeconds_($asNil$(this.pj_asNanoSeconds()).pj_43_($asNil$(operand).pj_asNanoSeconds()))});
i$(function pj_45_(operand){return this.pj_43_($asNil$(operand).pj_negated())});
i$(function pj_47_(operand){if(true==$asNil$(operand).pj_isNumber())return $asNil$(this.pj_class()).pj_nanoSeconds_($asNil$($asNil$(this.pj_asNanoSeconds()).pj_47_(operand)).pj_asInteger());else return $asNil$(this.pj_asNanoSeconds()).pj_47_($asNil$($asNil$(operand).pj_asDuration()).pj_asNanoSeconds())});
i$(function pj_60_(comparand){return this.pj_asNanoSeconds()<$asNil$(comparand).pj_asNanoSeconds()});
i$(function pj_61_(comparand){if(this===comparand)return true;else if(true==$asNil$(this.pj_species()).pj_61_($asNil$(comparand).pj_species()))return $asNil$(this.pj_asNanoSeconds()).pj_61_($asNil$(comparand).pj_asNanoSeconds());else return false});
i$(function pj_abs(){return $asNil$(this.pj_class()).pj_seconds_nanoSeconds_($asNil$(this.seconds).pj_abs(),$asNil$(this.nanos).pj_abs())});
i$(function pj_addDateAndTime_(aDateAndTime){return Date.pj_year_month_day_hour_minute_second_($asNil$(aDateAndTime).pj_year(),$asNil$(aDateAndTime).pj_monthIndex(),$asNil$($asNil$(aDateAndTime).pj_dayOfMonth()).pj_43_(this.pj_days()),$asNil$($asNil$(aDateAndTime).pj_hour24()).pj_43_(this.pj_hoursCount()),$asNil$($asNil$(aDateAndTime).pj_minute()).pj_43_(this.pj_minutesCount()),$asNil$($asNil$(aDateAndTime).pj_second()).pj_43_(this.pj_secondsCount()))});
i$(function pj_asDays(){return $asNil$(this.pj_asHours()).pj_47_(24)});
i$(function pj_asDuration(){return this});
i$(function pj_asHours(){return $asNil$(this.pj_asMinutes()).pj_47_(60.0)});
i$(function pj_asMicroseconds(){return $asNil$($asNil$($asNil$(this.seconds).pj_42_($ChronologyConstants.NanosInSecond)).pj_43_(this.nanos)).pj_47_47_((10).pj_raisedToInteger_(3))});
i$(function pj_asMilliSeconds(){return $asNil$($asNil$($asNil$(this.seconds).pj_42_($ChronologyConstants.NanosInSecond)).pj_43_(this.nanos)).pj_47_47_((10).pj_raisedToInteger_(6))});
i$(function pj_asMinutes(){return $asNil$(this.pj_asNanoSeconds()).pj_47_(6.0e10)});
i$(function pj_asNanoSeconds(){return $asNil$($asNil$(this.seconds).pj_42_($ChronologyConstants.NanosInSecond)).pj_43_(this.nanos)});
i$(function pj_asSeconds(){return this.seconds});
i$(function pj_days(){return $asNil$(this.seconds).pj_quo_($ChronologyConstants.SecondsInDay)});
i$(function pj_daysCount(){return $asNil$(this.pj_daysSecondsCount()).pj_quo_(this.pj_secondsInDay())});
i$(function pj_daysSecondsCount(){return $asNil$(this.pj_weeksSecondsCount()).pj_rem_(this.pj_secondsInWeek())});
i$(function pj_hash(){return $asNil$(this.seconds).pj_bitXor_(this.nanos)});
i$(function pj_hours(){return $asNil$($asNil$(this.seconds).pj_rem_($ChronologyConstants.SecondsInDay)).pj_quo_($ChronologyConstants.SecondsInHour)});
i$(function pj_hoursCount(){return $asNil$(this.pj_hoursSecondsCount()).pj_quo_($ChronologyConstants.SecondsInHour)});
i$(function pj_hoursSecondsCount(){return $asNil$(this.pj_daysSecondsCount()).pj_rem_(this.pj_secondsInDay())});
i$(function pj_initialize(){PjMagnitude.prototype.pj_initialize.call(this);this.pj_seconds_nanoSeconds_(0,0);return this});
i$(function pj_millisecondsCount(){return this.pj_wholeMilliseconds()});
i$(function pj_minutes(){return $asNil$($asNil$(this.seconds).pj_rem_($ChronologyConstants.SecondsInHour)).pj_quo_($ChronologyConstants.SecondsInMinute)});
i$(function pj_minutesCount(){return this.pj_minutes()});
i$(function pj_monthSecondsCount(){return $asNil$(this.pj_totalSeconds()).pj_rem_(this.pj_secondsInYear())});
i$(function pj_monthsCount(){return $asNil$(this.pj_monthSecondsCount()).pj_quo_(this.pj_secondsInMonth())});
i$(function pj_nanoSeconds(){return this.nanos});
i$(function pj_negated(){return $asNil$(this.pj_class()).pj_seconds_nanoSeconds_($asNil$(this.seconds).pj_negated(),$asNil$(this.nanos).pj_negated())});
i$(function pj_negative(){return $asNil$(this.pj_positive()).pj_not()});
i$(function pj_positive(){if(this.seconds==0)return $asNil$(this.nanos).pj_positive();else return $asNil$(this.seconds).pj_positive()});
i$(function pj_seconds(){return $asNil$(this.seconds).pj_rem_($ChronologyConstants.SecondsInMinute)});
i$(function pj_seconds_nanoSeconds_(secondCount,nanoCount){this.seconds=secondCount;this.nanos=$asNil$(nanoCount).pj_rounded();while(true==(this.nanos<0&&this.seconds>0)){this.seconds=this.seconds-1;this.nanos=$asNil$(this.nanos).pj_43_($ChronologyConstants.NanosInSecond)}while(true==(this.seconds<0&&this.nanos>0)){this.seconds=this.seconds+1;this.nanos=$asNil$(this.nanos).pj_45_($ChronologyConstants.NanosInSecond)}return this});
i$(function pj_secondsCount(){return this.pj_seconds()});
i$(function pj_secondsInDay(){return $asNil$(this.pj_class()).pj_secondsInDay()});
i$(function pj_secondsInMonth(){return $asNil$(this.pj_class()).pj_secondsInMonth()});
i$(function pj_secondsInWeek(){return $asNil$(this.pj_class()).pj_secondsInWeek()});
i$(function pj_secondsInYear(){return $asNil$(this.pj_class()).pj_secondsInYear()});
i$(function pj_ticks(){var days;days=this.pj_days();return Array.pj_with_with_with_(days,$asNil$(this.seconds).pj_45_($asNil$(days).pj_42_($ChronologyConstants.SecondsInDay)),this.nanos)});
i$(function pj_totalSeconds(){if(this.nanos==0)return this.seconds;else return $asNil$(this.pj_asNanoSeconds()).pj_47_(1000000000)});
i$(function pj_weeksCount(){return $asNil$(this.pj_weeksSecondsCount()).pj_quo_(this.pj_secondsInWeek())});
i$(function pj_weeksSecondsCount(){return $asNil$(this.pj_monthSecondsCount()).pj_rem_(this.pj_secondsInMonth())});
i$(function pj_wholeMicroseconds(){return $asNil$($asNil$(this.nanos).pj_rem_(1000000)).pj_quo_(1000)});
i$(function pj_wholeMilliseconds(){return $asNil$(this.nanos).pj_quo_(1000000)});
i$(function pj_wholeNanoseconds(){return $asNil$(this.nanos).pj_rem_(1000)});
i$(function pj_yearsCount(){return $asNil$(this.pj_totalSeconds()).pj_quo_(this.pj_secondsInYear())});
c$(function pj_days_(aNumber){return this.pj_seconds_nanoSeconds_($asNil$(aNumber).pj_42_($ChronologyConstants.SecondsInDay),0)});
c$(function pj_days_hours_minutes_seconds_(days,hours,minutes,seconds){return this.pj_days_hours_minutes_seconds_nanoSeconds_(days,hours,minutes,seconds,0)});
c$(function pj_days_hours_minutes_seconds_nanoSeconds_(days,hours,minutes,seconds,nanos){return this.pj_seconds_nanoSeconds_($asNil$($asNil$($asNil$($asNil$(days).pj_42_($ChronologyConstants.SecondsInDay)).pj_43_($asNil$(hours).pj_42_($ChronologyConstants.SecondsInHour))).pj_43_($asNil$(minutes).pj_42_($ChronologyConstants.SecondsInMinute))).pj_43_(seconds),nanos)});
c$(function pj_days_seconds_(days,seconds){return $asNil$(this.pj_basicNew()).pj_seconds_nanoSeconds_($asNil$($asNil$(days).pj_42_($ChronologyConstants.SecondsInDay)).pj_43_(seconds),0)});
c$(function pj_hours_(aNumber){return this.pj_seconds_nanoSeconds_($asNil$(aNumber).pj_42_($ChronologyConstants.SecondsInHour),0)});
c$(function pj_milliSeconds_(milliCount){return this.pj_seconds_nanoSeconds_($asNil$(milliCount).pj_quo_(1000),$asNil$($asNil$(milliCount).pj_rem_(1000)).pj_42_($ChronologyConstants.NanosInMillisecond))});
c$(function pj_minutes_(aNumber){return this.pj_seconds_nanoSeconds_($asNil$(aNumber).pj_42_($ChronologyConstants.SecondsInMinute),0)});
c$(function pj_months_(aNumber){return this.pj_seconds_($asNil$(aNumber).pj_42_(this.pj_secondsInMonth()))});
c$(function pj_nanoSeconds_(nanos){var quo;quo=$asNil$(nanos).pj_quo_($ChronologyConstants.NanosInSecond);return $asNil$(this.pj_basicNew()).pj_seconds_nanoSeconds_(quo,$asNil$(nanos).pj_45_($asNil$(quo).pj_42_($ChronologyConstants.NanosInSecond)))});
c$(function pj_seconds_(seconds){return this.pj_seconds_nanoSeconds_(seconds,0)});
c$(function pj_seconds_nanoSeconds_(seconds,nanos){return $asNil$(this.pj_basicNew()).pj_seconds_nanoSeconds_($asNil$(seconds).pj_truncated(),$asNil$($asNil$($asNil$(seconds).pj_fractionPart()).pj_42_($ChronologyConstants.NanosInSecond)).pj_43_(nanos))});
c$(function pj_secondsInDay(){return 86400});
c$(function pj_secondsInMonth(){return 2628000});
c$(function pj_secondsInWeek(){return 604800});
c$(function pj_secondsInYear(){return 31536000});
c$(function pj_weeks_(aNumber){return this.pj_days_seconds_(aNumber*7,0)});
c$(function pj_years_(aNumber){return this.pj_days_seconds_(aNumber*365,0)});
c$(function pj_zero(){return $asNil$(this.pj_basicNew()).pj_seconds_nanoSeconds_(0,0)});
},ChronologyConstants)
Object.pj_subclass_("Date");
Date.$$def(function(i$,c$,cp$){
i$(function pj_43_(otherObject){return $asNil$(otherObject).pj_addDateAndTime_(this)});
i$(function pj_asDateAndTime(){return this});
i$(function pj_asDateAndTime(){return this});
i$(function pj_dayOfMonth(){return this.pj_getDate()});
i$(function pj_dayOfMonth(){return this.pj_getDate()});
i$(function pj_dayOfWeek(){return this.pj_getDay()+1});
i$(function pj_dayOfWeek(){return this.pj_getDay()+1});
i$(function pj_hour(){return this.pj_hour24()});
i$(function pj_hour(){return this.pj_hour24()});
i$(function pj_hour12(){var hour24;hour24=this.pj_hour24();if(hour24==0)return 12;if(hour24>12)return hour24-12;return hour24});
i$(function pj_hour12(){var hour24;hour24=this.pj_hour24();if(hour24==0)return 12;if(hour24>12)return hour24-12;return hour24});
i$(function pj_hour24(){return this.pj_getHours()});
i$(function pj_hour24(){return this.pj_getHours()});
i$(function pj_milliSecond(){return this.pj_getMilliseconds()});
i$(function pj_milliSecond(){return this.pj_getMilliseconds()});
i$(function pj_minute(){return this.pj_getMinutes()});
i$(function pj_minute(){return this.pj_getMinutes()});
i$(function pj_monthIndex(){return this.pj_getMonth()+1});
i$(function pj_monthIndex(){return this.pj_getMonth()+1});
i$(function pj_monthIndex_(anInteger){return this.pj_month_(anInteger-1)});
i$(function pj_monthIndex_(anInteger){return this.pj_month_(anInteger-1)});
i$(function pj_second(){return this.pj_getSeconds()});
i$(function pj_second(){return this.pj_getSeconds()});
i$(function pj_serializationContents(){return this});
i$(function pj_year(){return this.pj_getFullYear()});
i$(function pj_year(){return this.pj_getFullYear()});
c$(function pj_newFromMaterialized_(jsonString){return new Date(jsonString)});
c$(function pj_now(){return new this()});
c$(function pj_now(){return new this()});
c$(function pj_today(){return this.pj_now()});
c$(function pj_todayHour_minute_(hour,minute){return this.pj_todayHour_minute_second_(hour,minute,0)});
c$(function pj_todayHour_minute_second_(hour,minute,second){var $1;return ($1=$asNil$(this.pj_new()),$1.pj_setHours_(hour),$1.pj_setMinutes_(minute),$1.pj_setSeconds_(second),$1.pj_yourself())});
c$(function pj_tomorrowHour_minute_(hour,minute){return this.pj_tomorrowHour_minute_second_(hour,minute,0)});
c$(function pj_tomorrowHour_minute_second_(hour,minute,second){return $asNil$(this.pj_todayHour_minute_second_(hour,minute,second)).pj_43_((1).pj_day())});
c$(function pj_year_month_day_hour_minute_second_(year,month1To12,day1To31,hour,minute,second){return new this(year, month1To12 - 1, day1To31, hour, minute, second)});
})
PjUndefinedObject.pj_javascriptInitialize();
Error.pj_javascriptInitialize();
Number.pj_javascriptInitialize();
ChronologyConstants.pj_initialize();
Object.pj_subclass_("NodeList");
NodeList.$$def(function(i$,c$,cp$){
i$(function pj_44_(other){var $1;return ($1=$asNil$($asNil$(this.pj_class()).pj_new()),$1.pj_addAll_(this),$1.pj_addAll_(other),$1.pj_yourself())});
i$(function pj_61_(anArray){var $_err_$={};try{if(false==$asNil$(this.pj_size()).pj_61_($asNil$(anArray).pj_size()))return false;this.pj_with_do_(anArray,function(myElement,otherElement){if(true==$asNil$(myElement).pj_61_(otherElement))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_addAll_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_add_(each)});return aCollection});
i$(function pj_addAllLast_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_addLast_(each)});return aCollection});
i$(function pj_allButFirst(){return this.pj_allButFirst_(1)});
i$(function pj_allButFirst_(n){return this.pj_copyFrom_to_(n+1,this.pj_size())});
i$(function pj_allButLast(){return this.pj_allButLast_(1)});
i$(function pj_allButLast_(n){return this.pj_copyFrom_to_(1,$asNil$(this.pj_size()).pj_45_(n))});
i$(function pj_allSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_anySatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=true;else return undefined});return false}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_appendTo_(aCollection){return $asNil$(aCollection).pj_addAllLast_(this)});
i$(function pj_asDictionary(){return this.pj_as_(PjDictionary)});
i$(function pj_asJsObject(){var jsObject;if(true==(true==this.pj_notEmpty()&&$asNil$($asNil$(this.pj_first()).pj_isKindOf_(PjAssociation)).pj_not()))return this;jsObject=Object.pj_new();this.pj_do_(function(association){return $asNil$(jsObject).pj_at_put_($asNil$(association).pj_key(),$asNil$($asNil$(association).pj_value()).pj_asJsObject())});return jsObject});
i$(function pj_asOrderedCollection(){return this.pj_as_(Array)});
i$(function pj_asSet(){return PjSet.pj_withAll_(this)});
i$(function pj_asString(){return $asNil$(String.pj_new_(this.pj_size())).pj_replaceFrom_to_with_(1,this.pj_size(),this)});
i$(function pj_associationsDo_(aBlock){this.pj_do_(aBlock);return this});
i$(function pj_at_(i){return this[i-1]});
i$(function pj_at_ifAbsent_(index,aBlock){if(true==(index>0&&index>this.pj_size()))return $asNil$(aBlock).pj_value();return this.pj_at_(index)});
i$(function pj_atRandom(){var randomIndex = Math.floor((Math.random() * this.pj_size()) + 1);
return this.pj_at_(randomIndex);});
i$(function pj_collect_(aBlock){var result=[];for(var i=0,max=this.length;i<max;++i)result.push(typeof aBlock=="string"?$asNil$(this[i]).pj_perform_(aBlock):aBlock(this[i]));return result});
i$(function pj_copyFrom_to_(start,stop){var newSize;newSize=$asNil$(stop).pj_45_(start)+1;return $asNil$($asNil$(this.pj_species()).pj_new_(newSize)).pj_replaceFrom_to_with_startingAt_(1,newSize,this,start)});
i$(function pj_copyReplaceFrom_to_with_(start,stop,replacementCollection){var newSequenceableCollection,newSize,endReplacement;newSize=$asNil$($asNil$(this.pj_size()).pj_45_($asNil$(stop).pj_45_(start)+1)).pj_43_($asNil$(replacementCollection).pj_size());endReplacement=$asNil$((start-1)).pj_43_($asNil$(replacementCollection).pj_size());newSequenceableCollection=$asNil$(this.pj_species()).pj_new_(newSize);if(start>1)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(1,start-1,this,1);if(start<=endReplacement)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(start,endReplacement,replacementCollection,1);if(endReplacement<newSize)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(endReplacement+1,newSize,this,stop+1);return newSequenceableCollection});
i$(function pj_copyWith_(newElement){var newIC;newIC=$asNil$(this.pj_species()).pj_new_(this.pj_size()+1);$asNil$(newIC).pj_replaceFrom_to_with_startingAt_(1,this.pj_size(),this,1);$asNil$(newIC).pj_at_put_($asNil$(newIC).pj_size(),newElement);return newIC});
i$(function pj_copyWithFirst_(newElement){var newIC;newIC=$asNil$(this.pj_species()).pj_ofSize_(this.pj_size()+1);$asNil$(newIC).pj_replaceFrom_to_with_startingAt_(2,this.pj_size()+1,this,1);$asNil$(newIC).pj_at_put_(1,newElement);return newIC});
i$(function pj_copyWithoutIndex_(index){var copy;copy=$asNil$(this.pj_species()).pj_ofSize_(this.pj_size()-1);$asNil$(copy).pj_replaceFrom_to_with_startingAt_(1,index-1,this,1);$asNil$(copy).pj_replaceFrom_to_with_startingAt_(index,$asNil$(copy).pj_size(),this,index+1);return copy});
i$(function pj_detect_ifFound_(aBlock,foundBlock){this.pj_detect_ifFound_ifNone_(aBlock,foundBlock,function(){return undefined});return this});
i$(function pj_detect_ifFound_ifNone_(aBlock,foundBlock,exceptionBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=$asNil$(foundBlock).pj_cull_(each);else return undefined});return $asNil$(exceptionBlock).pj_value()}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_detect_ifNone_(aBlock,exceptionBlock){return this.pj_detect_ifFound_ifNone_(aBlock,function(element){return element},exceptionBlock)});
i$(function pj_do_(aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i]);return this});
i$(function pj_do_separatedBy_(elementBlock,separatorBlock){for(var i=0,max=this.length;i<max;++i){if(i)separatorBlock();elementBlock(this[i])};return this});
i$(function pj_doWithIndex_(elementAndIndexBlock){return this.pj_withIndexDo_(elementAndIndexBlock)});
i$(function pj_first(){return this[0]});
i$(function pj_from_to_put_(startIndex,endIndex,anObject){var written,toWrite,thisWrite;if(startIndex>endIndex)return this;this.pj_at_put_(startIndex,anObject);written=1;toWrite=$asNil$(endIndex).pj_45_(startIndex)+1;while(written<toWrite){thisWrite=$asNil$(written).pj_min_($asNil$(toWrite).pj_45_(written));this.pj_replaceFrom_to_with_startingAt_($asNil$(startIndex).pj_43_(written),$asNil$($asNil$(startIndex).pj_43_(written)).pj_43_(thisWrite)-1,this,startIndex);written=$asNil$(written).pj_43_(thisWrite)}return anObject});
i$(function pj_grownBy_(length){var newCollection,size;size=this.pj_size();newCollection=$asNil$(this.pj_species()).pj_ofSize_($asNil$(size).pj_43_(length));$asNil$(newCollection).pj_replaceFrom_to_with_startingAt_(1,size,this,1);return newCollection});
i$(function pj_ifEmpty_(aBlock){if(true==this.pj_isEmpty())return $asNil$(aBlock).pj_value();return this});
i$(function pj_includes_(x){if (x.pj_isJSPrimitiveType()) {
if (this.includes(x)) return true;
for(var i=this.length-1;i>=0;--i) if (x==this[i]) return true;
return false}
for(var i=this.length-1;i>=0;--i) if (x.pj_61_(this[i])) return true;
return false});
i$(function pj_includesAll_(aCollection){var $_self_$=this;var $_err_$={};try{$asNil$(aCollection).pj_do_(function(elem){if(true==$_self_$.pj_includes_(elem))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_indexOf_(x){for(var i = 0; i < this.length; i++){
if(x == this[i]){return i + 1}
}
return 0;});
i$(function pj_inject_into_(thisValue,binaryBlock){var nextValue;nextValue=thisValue;this.pj_do_(function(each){return nextValue=$asNil$(binaryBlock).pj_value_value_(nextValue,each)});return nextValue});
i$(function pj_insert_before_(anObject,spot){this.splice(spot-1, 0, anObject);return anObject});
i$(function pj_isArray(){return true});
i$(function pj_isCollection(){return true});
i$(function pj_isEmpty(){return this.pj_size()==0});
i$(function pj_isEmptyOrNil(){return this.pj_isEmpty()});
i$(function pj_join_(aCollection){var result,$_self_$=this;result=$asNil$(this.pj_class()).pj_new();$asNil$(aCollection).pj_do_separatedBy_(function(each){return $asNil$(each).pj_appendTo_(result)},function(){return $_self_$.pj_appendTo_(result)});return result});
i$(function pj_last(){return this[this.length-1]});
i$(function pj_noneSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(item){if(true==$asNil$(aBlock).pj_value_(item))throw $_err_$=false;else return undefined});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_notEmpty(){return this.length!=0});
i$(function pj_reject_(aBlock){return this.pj_select_(function(element){return $asNil$(aBlock).pj_value_(element)===false})});
i$(function pj_remove_(oldObject){var $_self_$=this;return this.pj_remove_ifAbsent_(oldObject,function(){return $_self_$.pj_errorNotFound_(oldObject)})});
i$(function pj_removeAll_(aCollection){var $_self_$=this;if(aCollection===this)return this.pj_removeAll();$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_remove_(each)});return aCollection});
i$(function pj_replaceFrom_to_with_(start,stop,replacement){if(false==$asNil$($asNil$(replacement).pj_size()).pj_61_($asNil$(stop).pj_45_(start)+1))this.pj_error_("Size of replacement doesnt match");return this.pj_replaceFrom_to_with_startingAt_(start,stop,replacement,1)});
i$(function pj_reverseDo_(aBlock){var $_self_$=this;$asNil$(this.pj_size()).pj_to_by_do_(1,-1,function(index){return $asNil$(aBlock).pj_value_($_self_$.pj_at_(index))});return this});
i$(function pj_second(){return this[1]});
i$(function pj_select_(aBlock){var result=[];for(var i=0,max=this.length;i<max;++i){if(true==(typeof aBlock=="string"?$asNil$(this[i]).pj_perform_(aBlock):aBlock(this[i])))result.push(this[i])}return result});
i$(function pj_serializationContents(){var serializableElements;serializableElements=Array.pj_new();this.pj_do_(function(each){return $asNil$(serializableElements).pj_add_($asNil$(each).pj_serializationArray())});return serializableElements});
i$(function pj_size(){return this.length});
i$(function pj_species(){return Array});
i$(function pj_third(){return this[2]});
i$(function pj_with_do_(otherCollection,aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i],otherCollection[i]);return this});
i$(function pj_withIndexDo_(aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i],i+1);return this});
c$(function pj_newFrom_(aCollection){var newCollection;newCollection=this.pj_new_($asNil$(aCollection).pj_size());$asNil$(newCollection).pj_addAll_(aCollection);return newCollection});
c$(function pj_newFromMaterialized_(aJsonArray){var materializedArray;materializedArray=this.pj_new();$asNil$(aJsonArray).pj_do_(function(each){return $asNil$(materializedArray).pj_add_($asNil$(each).pj_materialize())});return materializedArray});
c$(function pj_with_(anObject){var newCollection;newCollection=this.pj_new_(1);$asNil$(newCollection).pj_at_put_(1,anObject);return newCollection});
c$(function pj_with_with_(firstObject,secondObject){var newCollection;newCollection=this.pj_new_(2);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);return newCollection});
c$(function pj_with_with_with_(firstObject,secondObject,thirdObject){var newCollection;newCollection=this.pj_new_(3);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);$asNil$(newCollection).pj_at_put_(3,thirdObject);return newCollection});
c$(function pj_with_with_with_with_(firstObject,secondObject,thirdObject,fourthObject){var newCollection;newCollection=this.pj_new_(4);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);$asNil$(newCollection).pj_at_put_(3,thirdObject);$asNil$(newCollection).pj_at_put_(4,fourthObject);return newCollection});
c$(function pj_withAll_(aCollection){var $1;return ($1=$asNil$(this.pj_new_($asNil$(aCollection).pj_size())),$1.pj_addAll_(aCollection),$1.pj_yourself())});
})
Object.pj_subclass_("PjApplication");
PjApplication.$$def(function(i$,c$,cp$){
i$(function pj_start(){return this});
i$(function pj_stop(){return this});
c$(function pj_classSubclassResponsibilitySet(){var set;set=this===PjApplication?PjSet.pj_new():$asNil$(this.pj_superclass()).pj_classSubclassResponsibilitySet();$asNil$($asNil$(this.pj_class()).pj_methods()).pj_do_(function(cm){var selector;selector=$asNil$(cm).pj_selector();if(true==$asNil$(cm).pj_sendsSelector_("subclassResponsibility"))return $asNil$(set).pj_add_(selector);else return $asNil$(set).pj_remove_ifAbsent_(selector,function(){return undefined})});return set});
c$(function pj_currentInstance(){return this.currentInstance});
c$(function pj_isAbstract(){if(true==$asNil$(this.pj_subclassResponsibilitySet()).pj_isNotEmpty())return true;else return $asNil$(this.pj_classSubclassResponsibilitySet()).pj_isNotEmpty()});
c$(function pj_resetCurrentInstance(){this.currentInstance=undefined;return this});
c$(function pj_setUpAppFolderPrompt(){return "PharoJS: Folder for app "+this.pj_name()+" please?"});
c$(function pj_start(){var $_self_$=this;this.pj_whenJsReady_(function(){return $_self_$.pj_startInstance()});return this});
c$(function pj_startInstance(){if(this.pj_currentInstance()==undefined)this.currentInstance=this.pj_new();$asNil$(this.pj_currentInstance()).pj_start();return this});
c$(function pj_stop(){if(this.pj_currentInstance()==undefined)return this;$asNil$(this.pj_currentInstance()).pj_stop();return this});
c$(function pj_subclassResponsibilitySet(){var set;set=this===PjApplication?PjSet.pj_new():$asNil$(this.pj_superclass()).pj_subclassResponsibilitySet();$asNil$(this.pj_methods()).pj_do_(function(cm){var selector;selector=$asNil$(cm).pj_selector();if(true==$asNil$(cm).pj_sendsSelector_("subclassResponsibility"))return $asNil$(set).pj_add_(selector);else return $asNil$(set).pj_remove_ifAbsent_(selector,function(){return undefined})});return set});
c$(function pj_whenJsReady_(aBlock){this.pj_subclassResponsibility();return this});
})
Object.pj_subclass_("HTMLCollection");
HTMLCollection.$$def(function(i$,c$,cp$){
i$(function pj_44_(other){var $1;return ($1=$asNil$($asNil$(this.pj_class()).pj_new()),$1.pj_addAll_(this),$1.pj_addAll_(other),$1.pj_yourself())});
i$(function pj_61_(anArray){var $_err_$={};try{if(false==$asNil$(this.pj_size()).pj_61_($asNil$(anArray).pj_size()))return false;this.pj_with_do_(anArray,function(myElement,otherElement){if(true==$asNil$(myElement).pj_61_(otherElement))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_addAll_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_add_(each)});return aCollection});
i$(function pj_addAllLast_(aCollection){var $_self_$=this;$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_addLast_(each)});return aCollection});
i$(function pj_allButFirst(){return this.pj_allButFirst_(1)});
i$(function pj_allButFirst_(n){return this.pj_copyFrom_to_(n+1,this.pj_size())});
i$(function pj_allButLast(){return this.pj_allButLast_(1)});
i$(function pj_allButLast_(n){return this.pj_copyFrom_to_(1,$asNil$(this.pj_size()).pj_45_(n))});
i$(function pj_allSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_anySatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=true;else return undefined});return false}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_appendTo_(aCollection){return $asNil$(aCollection).pj_addAllLast_(this)});
i$(function pj_asDictionary(){return this.pj_as_(PjDictionary)});
i$(function pj_asJsObject(){var jsObject;if(true==(true==this.pj_notEmpty()&&$asNil$($asNil$(this.pj_first()).pj_isKindOf_(PjAssociation)).pj_not()))return this;jsObject=Object.pj_new();this.pj_do_(function(association){return $asNil$(jsObject).pj_at_put_($asNil$(association).pj_key(),$asNil$($asNil$(association).pj_value()).pj_asJsObject())});return jsObject});
i$(function pj_asOrderedCollection(){return this.pj_as_(Array)});
i$(function pj_asSet(){return PjSet.pj_withAll_(this)});
i$(function pj_asString(){return $asNil$(String.pj_new_(this.pj_size())).pj_replaceFrom_to_with_(1,this.pj_size(),this)});
i$(function pj_associationsDo_(aBlock){this.pj_do_(aBlock);return this});
i$(function pj_at_(i){return this[i-1]});
i$(function pj_at_ifAbsent_(index,aBlock){if(true==(index>0&&index>this.pj_size()))return $asNil$(aBlock).pj_value();return this.pj_at_(index)});
i$(function pj_atRandom(){var randomIndex = Math.floor((Math.random() * this.pj_size()) + 1);
return this.pj_at_(randomIndex);});
i$(function pj_collect_(aBlock){var result=[];for(var i=0,max=this.length;i<max;++i)result.push(typeof aBlock=="string"?$asNil$(this[i]).pj_perform_(aBlock):aBlock(this[i]));return result});
i$(function pj_copyFrom_to_(start,stop){var newSize;newSize=$asNil$(stop).pj_45_(start)+1;return $asNil$($asNil$(this.pj_species()).pj_new_(newSize)).pj_replaceFrom_to_with_startingAt_(1,newSize,this,start)});
i$(function pj_copyReplaceFrom_to_with_(start,stop,replacementCollection){var newSequenceableCollection,newSize,endReplacement;newSize=$asNil$($asNil$(this.pj_size()).pj_45_($asNil$(stop).pj_45_(start)+1)).pj_43_($asNil$(replacementCollection).pj_size());endReplacement=$asNil$((start-1)).pj_43_($asNil$(replacementCollection).pj_size());newSequenceableCollection=$asNil$(this.pj_species()).pj_new_(newSize);if(start>1)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(1,start-1,this,1);if(start<=endReplacement)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(start,endReplacement,replacementCollection,1);if(endReplacement<newSize)$asNil$(newSequenceableCollection).pj_replaceFrom_to_with_startingAt_(endReplacement+1,newSize,this,stop+1);return newSequenceableCollection});
i$(function pj_copyWith_(newElement){var newIC;newIC=$asNil$(this.pj_species()).pj_new_(this.pj_size()+1);$asNil$(newIC).pj_replaceFrom_to_with_startingAt_(1,this.pj_size(),this,1);$asNil$(newIC).pj_at_put_($asNil$(newIC).pj_size(),newElement);return newIC});
i$(function pj_copyWithFirst_(newElement){var newIC;newIC=$asNil$(this.pj_species()).pj_ofSize_(this.pj_size()+1);$asNil$(newIC).pj_replaceFrom_to_with_startingAt_(2,this.pj_size()+1,this,1);$asNil$(newIC).pj_at_put_(1,newElement);return newIC});
i$(function pj_copyWithoutIndex_(index){var copy;copy=$asNil$(this.pj_species()).pj_ofSize_(this.pj_size()-1);$asNil$(copy).pj_replaceFrom_to_with_startingAt_(1,index-1,this,1);$asNil$(copy).pj_replaceFrom_to_with_startingAt_(index,$asNil$(copy).pj_size(),this,index+1);return copy});
i$(function pj_detect_ifFound_(aBlock,foundBlock){this.pj_detect_ifFound_ifNone_(aBlock,foundBlock,function(){return undefined});return this});
i$(function pj_detect_ifFound_ifNone_(aBlock,foundBlock,exceptionBlock){var $_err_$={};try{this.pj_do_(function(each){if(true==$asNil$(aBlock).pj_value_(each))throw $_err_$=$asNil$(foundBlock).pj_cull_(each);else return undefined});return $asNil$(exceptionBlock).pj_value()}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_detect_ifNone_(aBlock,exceptionBlock){return this.pj_detect_ifFound_ifNone_(aBlock,function(element){return element},exceptionBlock)});
i$(function pj_do_(aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i]);return this});
i$(function pj_do_separatedBy_(elementBlock,separatorBlock){for(var i=0,max=this.length;i<max;++i){if(i)separatorBlock();elementBlock(this[i])};return this});
i$(function pj_doWithIndex_(elementAndIndexBlock){return this.pj_withIndexDo_(elementAndIndexBlock)});
i$(function pj_first(){return this[0]});
i$(function pj_from_to_put_(startIndex,endIndex,anObject){var written,toWrite,thisWrite;if(startIndex>endIndex)return this;this.pj_at_put_(startIndex,anObject);written=1;toWrite=$asNil$(endIndex).pj_45_(startIndex)+1;while(written<toWrite){thisWrite=$asNil$(written).pj_min_($asNil$(toWrite).pj_45_(written));this.pj_replaceFrom_to_with_startingAt_($asNil$(startIndex).pj_43_(written),$asNil$($asNil$(startIndex).pj_43_(written)).pj_43_(thisWrite)-1,this,startIndex);written=$asNil$(written).pj_43_(thisWrite)}return anObject});
i$(function pj_grownBy_(length){var newCollection,size;size=this.pj_size();newCollection=$asNil$(this.pj_species()).pj_ofSize_($asNil$(size).pj_43_(length));$asNil$(newCollection).pj_replaceFrom_to_with_startingAt_(1,size,this,1);return newCollection});
i$(function pj_ifEmpty_(aBlock){if(true==this.pj_isEmpty())return $asNil$(aBlock).pj_value();return this});
i$(function pj_includes_(x){if (x.pj_isJSPrimitiveType()) {
if (this.includes(x)) return true;
for(var i=this.length-1;i>=0;--i) if (x==this[i]) return true;
return false}
for(var i=this.length-1;i>=0;--i) if (x.pj_61_(this[i])) return true;
return false});
i$(function pj_includesAll_(aCollection){var $_self_$=this;var $_err_$={};try{$asNil$(aCollection).pj_do_(function(elem){if(true==$_self_$.pj_includes_(elem))return undefined;else throw $_err_$=false});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_indexOf_(x){for(var i = 0; i < this.length; i++){
if(x == this[i]){return i + 1}
}
return 0;});
i$(function pj_inject_into_(thisValue,binaryBlock){var nextValue;nextValue=thisValue;this.pj_do_(function(each){return nextValue=$asNil$(binaryBlock).pj_value_value_(nextValue,each)});return nextValue});
i$(function pj_insert_before_(anObject,spot){this.splice(spot-1, 0, anObject);return anObject});
i$(function pj_isArray(){return true});
i$(function pj_isCollection(){return true});
i$(function pj_isEmpty(){return this.pj_size()==0});
i$(function pj_isEmptyOrNil(){return this.pj_isEmpty()});
i$(function pj_join_(aCollection){var result,$_self_$=this;result=$asNil$(this.pj_class()).pj_new();$asNil$(aCollection).pj_do_separatedBy_(function(each){return $asNil$(each).pj_appendTo_(result)},function(){return $_self_$.pj_appendTo_(result)});return result});
i$(function pj_last(){return this[this.length-1]});
i$(function pj_noneSatisfy_(aBlock){var $_err_$={};try{this.pj_do_(function(item){if(true==$asNil$(aBlock).pj_value_(item))throw $_err_$=false;else return undefined});return true}catch(e){if(e===$_err_$)return e;throw e}});
i$(function pj_notEmpty(){return this.length!=0});
i$(function pj_reject_(aBlock){return this.pj_select_(function(element){return $asNil$(aBlock).pj_value_(element)===false})});
i$(function pj_remove_(oldObject){var $_self_$=this;return this.pj_remove_ifAbsent_(oldObject,function(){return $_self_$.pj_errorNotFound_(oldObject)})});
i$(function pj_removeAll_(aCollection){var $_self_$=this;if(aCollection===this)return this.pj_removeAll();$asNil$(aCollection).pj_do_(function(each){return $_self_$.pj_remove_(each)});return aCollection});
i$(function pj_replaceFrom_to_with_(start,stop,replacement){if(false==$asNil$($asNil$(replacement).pj_size()).pj_61_($asNil$(stop).pj_45_(start)+1))this.pj_error_("Size of replacement doesnt match");return this.pj_replaceFrom_to_with_startingAt_(start,stop,replacement,1)});
i$(function pj_reverseDo_(aBlock){var $_self_$=this;$asNil$(this.pj_size()).pj_to_by_do_(1,-1,function(index){return $asNil$(aBlock).pj_value_($_self_$.pj_at_(index))});return this});
i$(function pj_second(){return this[1]});
i$(function pj_select_(aBlock){var result=[];for(var i=0,max=this.length;i<max;++i){if(true==(typeof aBlock=="string"?$asNil$(this[i]).pj_perform_(aBlock):aBlock(this[i])))result.push(this[i])}return result});
i$(function pj_serializationContents(){var serializableElements;serializableElements=Array.pj_new();this.pj_do_(function(each){return $asNil$(serializableElements).pj_add_($asNil$(each).pj_serializationArray())});return serializableElements});
i$(function pj_size(){return this.length});
i$(function pj_species(){return Array});
i$(function pj_third(){return this[2]});
i$(function pj_with_do_(otherCollection,aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i],otherCollection[i]);return this});
i$(function pj_withIndexDo_(aBlock){for(var i=0,max=this.length;i<max;++i)aBlock(this[i],i+1);return this});
c$(function pj_newFrom_(aCollection){var newCollection;newCollection=this.pj_new_($asNil$(aCollection).pj_size());$asNil$(newCollection).pj_addAll_(aCollection);return newCollection});
c$(function pj_newFromMaterialized_(aJsonArray){var materializedArray;materializedArray=this.pj_new();$asNil$(aJsonArray).pj_do_(function(each){return $asNil$(materializedArray).pj_add_($asNil$(each).pj_materialize())});return materializedArray});
c$(function pj_with_(anObject){var newCollection;newCollection=this.pj_new_(1);$asNil$(newCollection).pj_at_put_(1,anObject);return newCollection});
c$(function pj_with_with_(firstObject,secondObject){var newCollection;newCollection=this.pj_new_(2);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);return newCollection});
c$(function pj_with_with_with_(firstObject,secondObject,thirdObject){var newCollection;newCollection=this.pj_new_(3);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);$asNil$(newCollection).pj_at_put_(3,thirdObject);return newCollection});
c$(function pj_with_with_with_with_(firstObject,secondObject,thirdObject,fourthObject){var newCollection;newCollection=this.pj_new_(4);$asNil$(newCollection).pj_at_put_(1,firstObject);$asNil$(newCollection).pj_at_put_(2,secondObject);$asNil$(newCollection).pj_at_put_(3,thirdObject);$asNil$(newCollection).pj_at_put_(4,fourthObject);return newCollection});
c$(function pj_withAll_(aCollection){var $1;return ($1=$asNil$(this.pj_new_($asNil$(aCollection).pj_size())),$1.pj_addAll_(aCollection),$1.pj_yourself())});
})
Object.pj_subclass_("PjWebsocketDelegate");
PjWebsocketDelegate.$$def(function(i$,c$,cp$){
i$(function pj_close(){$asNil$(this.webSocket).pj_close();return this});
i$(function pj_connectTo_(urlString){this.webSocket=$asNil$(WebSocket).pj_new_(urlString);this.pj_initWebSocket();return this});
i$(function pj_initWebSocket(){var $_self_$=this;$asNil$(this.webSocket).pj_instVarNamed_put_("onopen",function(event){return $_self_$.pj_onOpen_(event)});$asNil$(this.webSocket).pj_instVarNamed_put_("onmessage",function(event){return $_self_$.pj_onMessage_(event)});$asNil$(this.webSocket).pj_instVarNamed_put_("onclose",function(event){return $_self_$.pj_onClose_(event)});$asNil$(this.webSocket).pj_instVarNamed_put_("onerror",function(event){return $_self_$.pj_onError_(event)});return this});
i$(function pj_isClosed(){if(this.webSocket==undefined)return true;return $asNil$(this.webSocket).pj_readyState()===$asNil$(WebSocket).pj_CLOSED()});
i$(function pj_isConnected(){if(this.webSocket==undefined)return false;return $asNil$(this.webSocket).pj_readyState()===$asNil$(WebSocket).pj_OPEN()});
i$(function pj_onClose_(event){return this});
i$(function pj_onError_(event){return this});
i$(function pj_onMessage_(event){return this});
i$(function pj_onOpen_(event){return this});
c$(function pj_connectToTag_(tagString){return this.pj_connectToUrl_("ws://"+$asNil$(location).pj_host()+"/"+tagString)});
c$(function pj_connectToUrl_(urlString){var newInstance;newInstance=this.pj_new();$asNil$(newInstance).pj_connectTo_(urlString);return newInstance});
})
PjApplication.pj_subclass_("PjDOMApplication");
PjDOMApplication.$$def(function(i$,c$,cp$){
i$(function pj_addElement_(tagString){return this.pj_addElement_to_(tagString,this.pj_body())});
i$(function pj_addElement_style_(tagString,cssStyleAssociations){return this.pj_addElement_to_style_(tagString,this.pj_body(),cssStyleAssociations)});
i$(function pj_addElement_to_(tagString,parentNode){var newElement;newElement=this.pj_createElement_(tagString);$asNil$(parentNode).pj_appendChild_(newElement);return newElement});
i$(function pj_addElement_to_style_(tagString,parentNode,cssStyleAssociations){var newElement;newElement=this.pj_createElement_style_(tagString,cssStyleAssociations);$asNil$(parentNode).pj_appendChild_(newElement);return newElement});
i$(function pj_attribute_at_(attributeName,elementId){return this.pj_attribute_ofElement_(attributeName,this.pj_elementAt_(elementId))});
i$(function pj_attribute_at_set_(attributeName,elementId,attributeValue){this.pj_attribute_ofElement_set_(attributeName,this.pj_elementAt_(elementId),attributeValue);return this});
i$(function pj_attribute_ofElement_(attributeName,domElement){return $asNil$(domElement).pj_getAttribute_(attributeName)});
i$(function pj_attribute_ofElement_set_(attributeName,domElement,attributeValue){$asNil$(domElement).pj_setAttribute_to_(attributeName,attributeValue);return this});
i$(function pj_body(){return $asNil$(this.pj_document()).pj_body()});
i$(function pj_createElement_(tagString){return $asNil$(this.pj_document()).pj_createElement_(tagString)});
i$(function pj_createElement_style_(tagString,cssStyleAssociations){var newElement;newElement=$asNil$(this.pj_document()).pj_createElement_(tagString);this.pj_setElement_style_(newElement,cssStyleAssociations);return newElement});
i$(function pj_cssClassesAddAll_element_(newClasses,domElement){this.pj_cssClassesReplaceAll_byAll_element_([],newClasses,domElement);return this});
i$(function pj_cssClassesElement_(domElement){return " ".pj_split_(this.pj_cssClassesStringElement_(domElement))});
i$(function pj_cssClassesElement_set_(domElement,cssClasses){var classString;classString="";$asNil$(cssClasses).pj_do_(function(each){return classString=$asNil$($asNil$(classString).pj_44_(" ")).pj_44_(each)});this.pj_cssClassesStringElement_set_(domElement,classString);return this});
i$(function pj_cssClassesRemoveAll_element_(oldCssClasses,domElement){this.pj_cssClassesReplaceAll_byAll_element_(oldCssClasses,[],domElement);return this});
i$(function pj_cssClassesReplaceAll_byAll_element_(oldCssClasses,newClasses,domElement){var cssClasses;cssClasses=this.pj_cssClassesElement_(domElement);$asNil$(oldCssClasses).pj_do_(function(each){return $asNil$(cssClasses).pj_remove_ifAbsent_(each,undefined)});$asNil$(cssClasses).pj_addAll_(newClasses);this.pj_cssClassesElement_set_(domElement,cssClasses);return this});
i$(function pj_cssClassesString_(elementId){return this.pj_cssClassesStringElement_(this.pj_elementAt_(elementId))});
i$(function pj_cssClassesString_set_(elementId,attributeValue){return this.pj_attribute_at_set_("class",elementId,attributeValue)});
i$(function pj_cssClassesStringElement_(domElement){if(($1=this.pj_attribute_ofElement_("class",domElement))==undefined)return "";else return $1});
i$(function pj_cssClassesStringElement_set_(domElement,newClassesString){this.pj_attribute_ofElement_set_("class",domElement,newClassesString);return this});
i$(function pj_document(){return document});
i$(function pj_document(){return document});
i$(function pj_elementAt_(elementId){return $asNil$(this.pj_document()).pj_getElementById_(elementId)});
i$(function pj_elementAt_in_(childId,container){return $asNil$(container).pj_querySelector_("#"+childId)});
i$(function pj_hide_(domElement){$asNil$($asNil$(domElement).pj_style()).pj_display_("none");return this});
i$(function pj_hideElementAt_in_(domElementId,container){this.pj_show_elementAt_in_(false,domElementId,container);return this});
i$(function pj_innerHtmlAt_(elementId){return $asNil$(this.pj_elementAt_(elementId)).pj_innerHTML()});
i$(function pj_innerHtmlAt_set_(elementId,aString){$asNil$(this.pj_elementAt_(elementId)).pj_innerHTML_(aString);return this});
i$(function pj_onChange_do_(elementId,aBlock){this.pj_onChange_in_do_(elementId,this.pj_body(),aBlock);return this});
i$(function pj_onChange_in_do_(elementId,container,aBlock){var element;element=this.pj_elementAt_in_(elementId,container);this.pj_onChangeElement_do_(element,aBlock);return this});
i$(function pj_onChangeElement_do_(element,aBlock){$asNil$(element).pj_addEventListener_block_("change",function(){return $asNil$(aBlock).pj_cull_cull_($asNil$(element).pj_value(),element)});return this});
i$(function pj_onClick_do_(elementId,aBlock){this.pj_onClick_in_do_(elementId,this.pj_body(),aBlock);return this});
i$(function pj_onClick_in_do_(elementId,container,aBlock){var element;element=this.pj_elementAt_in_(elementId,container);this.pj_onClickElement_do_(element,aBlock);return this});
i$(function pj_onClickElement_do_(element,aBlock){$asNil$(element).pj_addEventListener_block_("click",function(){return $asNil$(aBlock).pj_cull_(element)});return this});
i$(function pj_onEvent_for_in_do_(eventId,elementId,container,aBlock){var element;element=this.pj_elementAt_in_(elementId,container);$asNil$(element).pj_addEventListener_block_(eventId,aBlock);return this});
i$(function pj_onKeyUp_do_(elementId,aBlock){this.pj_onKeyUp_in_do_(elementId,this.pj_body(),aBlock);return this});
i$(function pj_onKeyUp_in_do_(elementId,container,aBlock){var element;element=this.pj_elementAt_in_(elementId,container);this.pj_onKeyUpElement_do_(element,aBlock);return this});
i$(function pj_onKeyUpElement_do_(element,aBlock){$asNil$(element).pj_addEventListener_block_("keyup",function(){return $asNil$(aBlock).pj_cull_cull_($asNil$(element).pj_value(),element)});return this});
i$(function pj_setElement_style_(domElement,cssStyleAssociations){var style;style=$asNil$(domElement).pj_style();$asNil$($asNil$(cssStyleAssociations).pj_asDictionary()).pj_keysAndValuesDo_(function(key,value){return $asNil$(style).pj_at_put_(key,value)});return this});
i$(function pj_show_(domElement){$asNil$($asNil$(domElement).pj_style()).pj_display_("");return this});
i$(function pj_show_element_(aBoolean,domElement){if(true==aBoolean)return this.pj_show_(domElement);this.pj_hide_(domElement);return this});
i$(function pj_show_elementAt_in_(aBoolean,domElementId,container){var element;element=this.pj_elementAt_in_(domElementId,container);this.pj_show_element_(aBoolean,element);return this});
i$(function pj_showElementAt_in_(domElementId,container){this.pj_show_elementAt_in_(true,domElementId,container);return this});
i$(function pj_start(){PjApplication.prototype.pj_start.call(this);this.pj_subscribeToDeviceEvents();return this});
i$(function pj_subscribeToDeviceEvents(){return this});
})
PjDOMApplication.pj_subclass_("PjWebApplication");
PjWebApplication.$$def(function(i$,c$,cp$){
c$(function pj_whenJsReady_(aBlock){window.addEventListener("load", aBlock)});
})
Smalltalk.pj_registerDnuForAll_(["%","*","+",",","-","/","//","=","@","CLOSED","OPEN","\\\\","abs","adaptToPoint:andSend:","add:","addAll:","addAllLast:","addDateAndTime:","addElement:to:","addElement:to:style:","addEventListener:block:","addFirst:","addLast:","adhereTo:","adoptInstance:","allButFirst:","allButLast:","allEnumeratableKeysDo:","allSubclassesDo:","angle","appendChild:","appendTo:","apply:with:","arcTan","arcTan:","arguments","as:","asCharacter","asDictionary","asDuration","asFloat","asHours","asInteger","asJSON","asJsObject","asMinutes","asNanoSeconds","asPoint","asString","asUppercase","asciiValue","associationsDo:","at:","at:ifAbsent:","at:ifAbsentPut:","at:ifPresent:","at:put:","atEnd","attribute:at:set:","attribute:ofElement:","attribute:ofElement:set:","back","basicAt:","basicNew","basicNew:","basicNew:with:","basicNew:with:with:","basicNew:with:with:with:","basicNew:with:with:with:with:","beginsWith:","between:and:","bitAnd:","bitShift:","bitXor:","body","bottom","call:","call:with:","call:with:with:","call:with:with:with:","canUnderstand:","capitalized","ceiling","class","className","classPool","classSubclassResponsibilitySet","close","closeTo:","collect:","connectTo:","connectToUrl:","containsPoint:","contents","copyFrom:to:","corner","cos","createElement:","createElement:style:","crossProduct:","cssClassesElement:","cssClassesElement:set:","cssClassesReplaceAll:byAll:element:","cssClassesStringElement:","cssClassesStringElement:set:","cull:","cull:cull:","currentInstance","day","dayOfMonth","days","days:","days:hours:minutes:seconds:nanoSeconds:","days:seconds:","daysSecondsCount","deepCopy","degreesToRadians","denormalized","detect:ifFound:ifNone:","display:","displayScaleFactor","distanceTo:","dividend:","do:","do:separatedBy:","document","dotProduct:","elementAt:","elementAt:in:","emptyCollection","emptyJavascriptObject","ensure:","eqv:","error:","errorNotFound:","even","exp","findDelimiters:startingAt:","findIndex:","first","floor","floor:","fminDenormalized","fminNormalized","fractionPart","fromNumber:","fromPoint:","fromRectangle:","getAttribute:","getDate","getDay","getElementById:","getFullYear","getHours","getMilliseconds","getMinutes","getMonth","getSeconds","handleDNU:for:","hash","hashMultiply","height","hide:","highBit","highBitOfPositiveReceiver","host","hour24","hours","hours:","hoursCount","hoursSecondsCount","identityHash","ifTrue:ifFalse:","includes:","includesKey:","inheritsFrom:","initNilInJs","initObject","initThrowInJs","initWebSocket","initialize","innerHTML","innerHTML:","inputWidgetForPoint","instVarNamed:","instVarNamed:put:","instVarNamed:putHidden:","installDnuArgs:selector:js:for:else:","integerPart","isCharacter","isEmpty","isFloat","isFloatPoint","isFraction","isFunction:","isInteger","isIntegerPoint","isKindOf:","isLetter","isNil","isNotEmpty","isNotNil","isNumber","isPharoJsSelector:","isPoint","isVowel","isZero","join","join:","js_apply:args:","js_charAt:","js_charCodeAt:","js_defineProperty:field:properties:","js_forEach:","js_fromCharCode:","js_hasOwnProperty:","js_join:","js_log:","js_parse:","js_pop","js_push:","js_shift","js_split:","js_substring:","js_substring:to:","js_toLowerCase","js_toString","js_toUpperCase","key","key:","key:value:","keys","keysAndValuesDo:","keysDo:","left","left:right:top:bottom:","leftRotated","letterCharCodes","ln","load:","log:","makeDNU:","makeGetter:","makePharoJsSelector:","makeSetter:","makeSubclass","materialize","materializeFromArray:","materializeFromString:","max:","messageClass:","messageText:","metaclassClass:","metaclassOf:","methods","milliSeconds","milliSeconds:","min:","minute","minutes","minutes:","minutesCount","month:","monthIndex","monthSecondsCount","months","months:","name","nanoSeconds:","nearestPointAlongLineFrom:to:","negated","negative","new","new:","newFrom:","newFromMaterialized:","next","nextIdentityHash","nextPut:","nextPutAll:","nilIfUndefined","nilInJs:","nilTestFunctionName","not","notEmpty","notNil","now","ofSize:","on:","onChange:in:do:","onChangeElement:do:","onClick:in:do:","onClickElement:do:","onClose:","onError:","onKeyUp:in:do:","onKeyUpElement:do:","onLineFrom:to:within:","onMessage:","onOpen:","one","origin","origin:corner:","origin:extent:","parse:","parseListDo:","peek","perform:with:","pharoJsSelectorPrefix","pi","point:point:","position","position:","positionError","positive","postCopy","precision","print:","printOn:","printString","propertySet:","prototype","quadrantOf:","querySelector:","quo:","r","radiansToDegrees","raisedTo:","raisedToFraction:","raisedToInteger:","readStream","readyState","reciprocal","rectangle:","registerDnu:","rem:","remove:","remove:ifAbsent:","removeAll","removeAt:","removeFirst","replaceFrom:to:with:","replaceFrom:to:with:startingAt:","reset","right","rightRotated","roundDownTo:","roundTo:","roundUpTo:","rounded","second","seconds","seconds:","seconds:nanoSeconds:","secondsCount","secondsInDay","secondsInMonth","secondsInWeek","secondsInYear","select:","selector","selectors","sendsSelector:","serializationArray","serializationContents","setAttribute:to:","setElement:style:","setHours:","setMinutes:","setPoint:point:","setR:degrees:","setSeconds:","setTop:left:bottom:right:","setX:setY:","shallowCopy","show:","show:element:","show:elementAt:in:","sideOf:","sign","signal","signal:","sin","size","skip:","skipDelimiters:startingAt:","sort","space","species","split:","sqrt","start","startInstance","stop","stringHash:initialHash:","stringify:","style","subclassResponsibility","subclassResponsibilitySet","subclassSelector","subclasses","subclassesDo:","subscribeToDeviceEvents","superclass","theta","throwFunction","throwFunctionName","timesTwoPower:","to:","to:by:do:","to:do:","to:sideOf:","todayHour:minute:second:","tomorrowHour:minute:second:","top","topLeft","totalSeconds","triangleArea:with:","truncateTo:","truncated","typeof","value","value:","value:value:","value:value:value:","value:value:value:value:","valuesDo:","visitPoint:","weeks","weeks:","weeksSecondsCount","whenJsReady:","whileFalse:","whileTrue:","wholeMilliseconds","width","with:","with:do:","with:with:with:","with:with:with:with:","withAll:","withIndexDo:","writeObject:streamShortList:","writeStream","x","x:y:","y","year","year:month:day:hour:minute:second:","years","years:","yourself"]);
var process=process||{exit:function(){window.close()}};
PjWebsocketDelegate.pj_subclass_("PjEvaluatorWebsocketDelegate");
PjEvaluatorWebsocketDelegate.$$def(function(i$,c$,cp$){
i$(function pj_close(){this.shouldRetryToConnectToServer=false;PjWebsocketDelegate.prototype.pj_close.call(this);return this});
i$(function pj_command_(aString){var top = (function(){return this})(),
match = aString.match(/^:(.)((\$_)?.*)/),
op = match[1],
name = match[2],
obj = top[name];
if (obj && op=="-") {
obj.$_jsName = undefined;
if (match[2])
delete top[name]
}});
i$(function pj_connectTo_(urlString){this.shouldRetryToConnectToServer=true;this.bridgeUrlString=urlString;PjWebsocketDelegate.prototype.pj_connectTo_.call(this,urlString);return this});
i$(function pj_doCallBack_(aResult){$asNil$(this.webSocket).pj_send_(aResult);this.pj_logSent_(aResult);return this});
i$(function pj_eval_(aString){var result;
try{
result = Object.pj_resultObject_((function(){return this.eval(aString)})());
}catch(exception){
result={exception:exception.message};
}
try{
aString=JSON.stringify(result);
if(result!=null&&aString=="null") aString=result.toString(); 
return aString;
}catch(stringifyException){
return JSON.stringify({exception:stringifyException.message});
}});
i$(function pj_initialize(){PjWebsocketDelegate.prototype.pj_initialize.call(this);$asNil$(Object.pj_prototype()).pj_instVarNamed_putHidden_($asNil$(Smalltalk.pj_pharoJsSelectorPrefix()).pj_44_("inspect"),this.pj_makeInspect());return this});
i$(function pj_logReceived_(aString){$asNil$(console).pj_log_("Received: "+aString);return this});
i$(function pj_logSent_(aString){$asNil$(console).pj_log_("Sent: "+aString);return this});
i$(function pj_makeBlockClosureProxy_(withThis){return this.pj_makeBlockClosureProxy_stopPropagation_(withThis,true)});
i$(function pj_makeBlockClosureProxy_stopPropagation_(withThis,stop){var self=this;
function PjBlockClosureProxy(ev){
callback(PjBlockClosureProxy.$_jsName,ev,this);
return true;
};
function callback(name,ev,jsThis) {
if (stop) ev.stopPropagation();
self.pj_doCallBack_(JSON.stringify({cb : [name,
Object.pj_resultObject_(ev),
Object.pj_resultObject_(withThis?jsThis:undefined)]}));
}
PjBlockClosureProxy.$PjRefCount=0;
return PjBlockClosureProxy;});
i$(function pj_makeInspect(){var wsd=this;
return function(){
wsd.pj_doCallBack_(JSON.stringify({inspect:Object.pj_resultObject_(this)}));
return this
}});
i$(function pj_onClose_(event){this.pj_reconnect();return this});
i$(function pj_onError_(event){this.pj_reconnect();return this});
i$(function pj_onMessage_(event){var aString,$_self_$=this;aString=$asNil$(event).pj_data();this.pj_logReceived_(aString);if($asNil$(aString).pj_first()==":")return this.pj_command_(aString);this.pj_timeout_for_(function(){aString=$_self_$.pj_eval_(aString);if(false==$_self_$.pj_isClosed())$asNil$($_self_$.webSocket).pj_send_(aString);return $_self_$.pj_logSent_(aString)},0);return this});
i$(function pj_reconnect(){if(false==this.shouldRetryToConnectToServer)return this;PjWebsocketDelegate.prototype.pj_connectTo_.call(this,this.bridgeUrlString);return this});
i$(function pj_timeout_for_(aBlock,milliseconds){setTimeout(aBlock,milliseconds)});
c$(function pj_closeDefault(){$asNil$(this.pj_default()).pj_close();return this});
c$(function pj_connectDefaultToTag_(tagString){var newInstance;newInstance=this.pj_connectToTag_(tagString);this.pj_default_(newInstance);return this});
c$(function pj_connectDefaultToUrl_(urlString){var newInstance;newInstance=this.pj_connectToUrl_(urlString);this.pj_default_(newInstance);return this});
c$(function pj_default(){return this.default});
c$(function pj_default_(newInstance){this.default=newInstance;return this});
c$(function pj_initialize(){"JSON Math WebSocket console global document history location navigator screen window localStorage module process require".split(" ").forEach(function(s){
if(this[s]){
try{Object.defineProperty(this[s],"$_jsName",{value:s,writable:true})}catch(s){};
}})});
c$(function pj_reload(){this.pj_closeDefault();$asNil$(location).pj_reload_(true);return this});
c$(function pj_reload_(aBoolean){this.pj_closeDefault();$asNil$(location).pj_reload_(aBoolean);return this});
c$(function pj_set_callback_to_(anObject,aString,callback){aString="on"+aString;
console.log(aString);
var old=anObject[aString];
console.log(callback);
console.log(typeof callback);
console.log(old);
anObject[aString]=callback;
console.log(anObject[aString]);
if (callback && callback.hasOwnProperty("$PjRefCount")) {
++callback.$PjRefCount;
}
if (old && old.$PjRefCount && --old.$PjRefCount==0) {
old.$PjProxyRemove = true;
return old;
}
return true;});
c$(function pj_terminate(){var $_self_$=this;(function(){return $_self_$.pj_closeDefault()}).pj_on_do_(Error,function(){return undefined});(function(){return $asNil$(process).pj_exit()}).pj_on_do_(Error,function(){return undefined});return this});
})
Smalltalk.pj_registerDnuForAll_(["closeDefault","command:","connectDefaultToUrl:","connectToTag:","data","default","default:","eval:","exit","isClosed","logReceived:","logSent:","makeBlockClosureProxy:stopPropagation:","makeInspect","on:do:","reconnect","reload:","send:","timeout:for:"]);
PjEvaluatorWebsocketDelegate.pj_initialize();
(function(appClass,webSocketDelegateClass,url){return function(){$asNil$(appClass).pj_start();return $asNil$(webSocketDelegateClass).pj_connectDefaultToUrl_(url)}})(PjWebApplication,PjEvaluatorWebsocketDelegate,"ws://localhost:1075/javascript-bridge")();

Object.pj_subclass_("AdventOfCode");
AdventOfCode.$$def(function(i$,c$,cp$){
c$(function pj_calculateOrbits_(map){var tree;return 1});
c$(function pj_findNounVerb_(originalProgram){var output,program,$_self_$=this;var $_err_$={};try{(0).pj_to_do_(99,function(a){return (0).pj_to_do_(99,function(b){program=$asNil$(originalProgram).pj_copy();$asNil$(program).pj_at_put_(2,a);$asNil$(program).pj_at_put_(3,b);output=$asNil$($_self_$.pj_intcodeOriginal_(program)).pj_at_(1);if(output===19690720)throw $_err_$=b;else return undefined})});return -1}catch(e){if(e===$_err_$)return e;throw e}});
c$(function pj_fuelRequirement2_(mass){var required,total;required=this.pj_fuelRequirement_(mass);total=0;while(required>=0){total=$asNil$(total).pj_43_(required);required=this.pj_fuelRequirement_(required)}return total});
c$(function pj_fuelRequirement_(mass){return $asNil$(mass).pj_47_47_(3)-2});
c$(function pj_fuelRequirementTotal2_(masses){var total,$_self_$=this;total=0;$asNil$(masses).pj_do_(function(i){return total=$asNil$(total).pj_43_($_self_$.pj_fuelRequirement2_(i))});return total});
c$(function pj_fuelRequirementTotal_(masses){var total,$_self_$=this;total=0;$asNil$(masses).pj_do_(function(i){return total=$asNil$(total).pj_43_($_self_$.pj_fuelRequirement_(i))});return total});
c$(function pj_intcode1_index_instruction_(program,index,instruction){var x,y,z;x=this.pj_intcodeParams_arg_program_index_(instruction,1,program,index);y=this.pj_intcodeParams_arg_program_index_(instruction,2,program,index);z=$asNil$(x).pj_43_(y);$asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+3)+1,z);return 4});
c$(function pj_intcode2_index_instruction_(program,index,instruction){var x,y,z;x=this.pj_intcodeParams_arg_program_index_(instruction,1,program,index);y=this.pj_intcodeParams_arg_program_index_(instruction,2,program,index);z=$asNil$(x).pj_42_(y);$asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+3)+1,z);return 4});
c$(function pj_intcode3_index_input_(program,index,input){$asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+1)+1,input);return 2});
c$(function pj_intcode3_index_instruction_input_(program,index,instruction,input){$asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+1)+1,input);return 2});
c$(function pj_intcode4_index_instruction_(program,index,instruction){var x,$1;x=this.pj_intcodeParams_arg_program_index_(instruction,1,program,index);{$1=$asNil$(Transcript);$1.pj_show_(x);$1.pj_cr()}return 2});
c$(function pj_intcode5_index_instruction_(program,index,instruction){var x,y;x=this.pj_intcodeParams_arg_program_index_(instruction,1,program,index);if(x!=0){y=this.pj_intcodeParams_arg_program_index_(instruction,2,program,index);return $asNil$((y+1)).pj_45_(index)}return 3});
c$(function pj_intcode6_index_instruction_(program,index,instruction){var x,y;x=this.pj_intcodeParams_arg_program_index_(instruction,1,program,index);if(x===0){y=this.pj_intcodeParams_arg_program_index_(instruction,2,program,index);return $asNil$((y+1)).pj_45_(index)}return 3});
c$(function pj_intcode7_index_instruction_(program,index,instruction){var x,y;x=this.pj_intcodeParams_arg_program_index_(instruction,1,program,index);y=this.pj_intcodeParams_arg_program_index_(instruction,2,program,index);if(x<y)$asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+3)+1,1);else $asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+3)+1,0);return 4});
c$(function pj_intcode8_index_instruction_(program,index,instruction){var x,y;x=this.pj_intcodeParams_arg_program_index_(instruction,1,program,index);y=this.pj_intcodeParams_arg_program_index_(instruction,2,program,index);if(true==$asNil$(x).pj_61_(y))$asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+3)+1,1);else $asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+3)+1,0);return 4});
c$(function pj_intcodeMachine_input_(program,input){var programLen,index,increment,instruction,opcode,$1;programLen=$asNil$(program).pj_size();index=1;increment=4;while(index<=programLen){instruction=$asNil$(program).pj_at_(index);opcode=$asNil$($asNil$(instruction).pj_digitAt_base_(1,10)).pj_43_(10*$asNil$(instruction).pj_digitAt_base_(2,10));{$1=$asNil$(Transcript);$1.pj_show_("opcode:");$1.pj_show_(opcode);$1.pj_show_(", index: ");$1.pj_show_(index);$1.pj_cr()}if(opcode==99)programLen=-1;else increment=4;if(opcode==1)increment=this.pj_intcode1_index_instruction_(program,index,instruction);if(opcode==2)increment=this.pj_intcode2_index_instruction_(program,index,instruction);if(opcode==3)increment=this.pj_intcode3_index_input_(program,index,input);if(opcode==4)increment=this.pj_intcode4_index_instruction_(program,index,instruction);if(opcode==5)increment=this.pj_intcode5_index_instruction_(program,index,instruction);if(opcode==6)increment=this.pj_intcode6_index_instruction_(program,index,instruction);if(opcode==7)increment=this.pj_intcode7_index_instruction_(program,index,instruction);if(opcode==8)increment=this.pj_intcode8_index_instruction_(program,index,instruction);index=$asNil$(index).pj_43_(increment)}return program});
c$(function pj_intcodeOriginal_(program){var programLen,index,x,y;programLen=$asNil$(program).pj_size();index=1;while(index<=programLen){if($asNil$(program).pj_at_(index)!=99)undefined;if($asNil$(program).pj_at_(index)===1){x=$asNil$(program).pj_at_(index+1)+1;y=$asNil$(program).pj_at_(index+2)+1;$asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+3)+1,$asNil$($asNil$(program).pj_at_(x)).pj_43_($asNil$(program).pj_at_(y)))}if($asNil$(program).pj_at_(index)===2){x=$asNil$(program).pj_at_(index+1)+1;y=$asNil$(program).pj_at_(index+2)+1;$asNil$(program).pj_at_put_($asNil$(program).pj_at_(index+3)+1,$asNil$($asNil$(program).pj_at_(x)).pj_42_($asNil$(program).pj_at_(y)))}index=index+4}return program});
c$(function pj_intcodeParams_arg_program_index_(instruction,arg,program,index){if($asNil$(instruction).pj_digitAt_base_(2+arg,10)==1)return $asNil$(program).pj_at_($asNil$(index).pj_43_(arg));else return $asNil$(program).pj_at_($asNil$(program).pj_at_($asNil$(index).pj_43_(arg))+1)});
c$(function pj_passwordCount2_end_(a,b){var total,$_self_$=this;total=0;$asNil$(a).pj_to_do_(b,function(i){if(true==$_self_$.pj_validPassword2_(i))return total=total+1;else return undefined});return total});
c$(function pj_passwordCount_end_(a,b){var total,$_self_$=this;total=0;$asNil$(a).pj_to_do_(b,function(i){if(true==$_self_$.pj_validPassword_(i))return total=total+1;else return undefined});return total});
c$(function pj_validPassword2_(password){var priorDigit,hasAdjacent,adjacencyCounter;var $_err_$={};try{if($asNil$(password).pj_decimalDigitLength()!=6)return false;hasAdjacent=false;adjacencyCounter=0;priorDigit=$asNil$(password).pj_digitAt_base_(1,10);(2).pj_to_do_(6,function(i){if($asNil$(password).pj_digitAt_base_(i,10)>priorDigit)throw $_err_$=false;if(true==$asNil$($asNil$(password).pj_digitAt_base_(i,10)).pj_61_(priorDigit))adjacencyCounter=adjacencyCounter+1;else {if(adjacencyCounter==1)hasAdjacent=true;adjacencyCounter=0}return priorDigit=$asNil$(password).pj_digitAt_base_(i,10)});if(adjacencyCounter==1)hasAdjacent=true;return hasAdjacent}catch(e){if(e===$_err_$)return e;throw e}});
c$(function pj_validPassword_(password){var priorDigit,hasAdjacent;var $_err_$={};try{if($asNil$(password).pj_decimalDigitLength()!=6)return false;hasAdjacent=false;priorDigit=$asNil$(password).pj_digitAt_base_(1,10);(2).pj_to_do_(6,function(i){if($asNil$(password).pj_digitAt_base_(i,10)>priorDigit)throw $_err_$=false;if(true==$asNil$($asNil$(password).pj_digitAt_base_(i,10)).pj_61_(priorDigit))hasAdjacent=true;return priorDigit=$asNil$(password).pj_digitAt_base_(i,10)});return hasAdjacent}catch(e){if(e===$_err_$)return e;throw e}});
})
Smalltalk.pj_registerDnuForAll_(["copy","cr","decimalDigitLength","digitAt:base:","fuelRequirement2:","fuelRequirement:","intcode1:index:instruction:","intcode2:index:instruction:","intcode3:index:input:","intcode4:index:instruction:","intcode5:index:instruction:","intcode6:index:instruction:","intcode7:index:instruction:","intcode8:index:instruction:","intcodeOriginal:","intcodeParams:arg:program:index:","validPassword2:","validPassword:"]);
(function(){var aoc;aoc=AdventOfCode;return aoc})()