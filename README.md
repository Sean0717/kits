# kits
 工具库

### 使用方式

1. 引入js文件kits.js

   ~~~js
   <script src="./kit.js"></script>
   ~~~

2. 调用方法

   ~~~js
   var rgbColor = kits.randomRGBColor();  // 得到一个随机的rgb颜色
   ~~~

   

   

### 方法

1. formatDate	获取当前时间，并且返回： xxxx-xx-xx HH:mm:ss格式的时间

2. randomHexColor  获取一个随机的十六进制的颜色

3. randomInt  获取n到m之间的随机整数

4. randomRGBColor   获取一个随机的rgb格式的颜色

5. getLocalDataArray(key)  从localStorage里面根据指定的键(key)获取一个数组

   参数
   
   key：localStorage里面根据根据key存储的数据
   
   **举例：getLocalDataArray的源码**
   
   ~~~js
   /**
    * 从localStorage里面根据指定的键获取一个数组
    * @param {string} key 存储在localStorage里面数据对应的键
 * @returns {Array} 将JSON字符串反序列化后的数组
    */
   kits.getLocalDataArray = function(key){
     var data = localStorage.getItem(key);
     var arr = JSON.parse(data);
     if(!arr){
       arr = [];
     }
     return arr;
   }
   ~~~
   

6. saveLocalDataArray(key,arr)   将一个数组(arr)以指定的键(key)存储到localStorage里面

   参数

   key：localStorage里面根据根据key存储的数据

   arr:    要存入localStorage的key里面的数据

   

7. appendDataIntoArray(key,data)  向localStorage里面指定键(key)的数组数据追加一个数据对象（data）

   参数

   key：localStorage里面根据根据key存储的数据

   data:    你要追加到localstorage的数据

   

8. deleteLocalDataById(key,id)   根据对应的id从localStorage中指定键(key)的数组中删除一条数据

   参数

   key：localStorage里面根据根据key存储的数据

   id:    根据你传入的id，找到localStorage里面的key对应的数据，删除掉

   

9. modifyLocalDataById(key,id,data)  根据id修改localStorage里面的指定键(key)的数组数据

   参数

   key：localStorage里面根据根据key存储的数据

   id:    根据你传入的id，找到localStorage里面的key对应的数据

   data: 把通过id找到的数据，修改为你传入的data