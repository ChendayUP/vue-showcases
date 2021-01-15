
// function readFile(filename) {
//   parser=new DOMParser();
//   xmlDoc=parser.parseFromString(xml,"text/xml");
//   var fso = new ActiveXObject("Scripting.FileSystemObject");
//   var f = fso.OpenTextFile(filename,1);
//   var s = "";
//   while (!f.AtEndOfStream)
//     s += f.ReadLine()+"\n";
//   f.Close();
//   return s;
// }
import text from "./csv"
function readCSV() {
  //解析csv数据
  var csv = text.text
  var lines=csv.split("\n");
  var list=[];
  var mapping={"0":{level:0,childs:[]}};
  var arr=lines[0].split(",");
  if(arr.length!=8 || arr[0]!="id"){
    return Result("粘贴csv数据不合法");
  };
  for(var i=1;i<lines.length;i++){
    var line=lines[i];
    if(line){
      var arr=line.split(",");
      if(arr.length!=8){
        return Result("粘贴csv数据第"+(i+1)+"行不合法");
      };
      var itm={
        id:+arr[0]
        ,pid:+arr[1]
        ,deep:+arr[2]
        ,name:arr[3].replace(/""/g,'"').replace(/^"|"$/g,'')
        ,pinyin_prefix:arr[4].replace(/""/g,"").replace(/^"|"$/g,'')
        ,pinyin:arr[5].replace(/""/g,"").replace(/^"|"$/g,'').replace(/\s+/g,"").toUpperCase()
        ,ext_id:arr[6].replace(/""/g,"").replace(/^"|"$/g,'')
        ,ext_name:arr[7].replace(/""/g,"").replace(/^"|"$/g,'')

        ,level:-1
        ,childs:[]
      };
      list.push(itm);
      mapping[itm.ext_name]=itm.pinyin;
    };
  };
  console.log('35','readCSV=> list', list)
  console.log('36','readCSV=> mapping', mapping)
  return mapping
}

export default {
  readCSV
}
