import {fun1,fun2} from './math';
import data from '../data/test.json'
import '../css/test.css'


document.write('webpack success!'+'<br/>');
document.write(fun1(2)+'===='+fun2(3)+'<br/>');
document.write(JSON.stringify(data));