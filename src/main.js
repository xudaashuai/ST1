import data from '../static/data.json'
// 行李信息
console.log(data)
class Baggage {
  constructor(weight, length, width, height) {
    this.weight = weight;
    this.length = length;
    this.width = width;
    this.height = height;
  }
  size(){
    return this.width+this.length+this.height
  }
}

// 游客信息
class Traveler {
  constructor(type, special) {
    this.type = type;
    this.special = special
  }
}
Traveler.SpecialType = {
  超级会员: 0,
  会员: 1,
  特殊工作人员: 2,
  普通人员: 3
};
Traveler.Type = {
  头等舱: 0,
  公务舱: 1,
  经济舱: 2,
  明珠经济舱: 3,
  不占座婴儿: 4
};

// 航班信息
class Flight {
  constructor(start, end,type) {
    this.start = start;
    this.end = end;
    this.type = type
  }
}
Flight.Type = {
  国内航班: 0,
  区域一: 1,
  区域二_涉及美国: 2,
  区域二_不涉及美国: 3,
  区域三: 4,
  区域四: 5,
  区域五: 6,
};

// 完整的一次旅行信息
function func(weight, length, width, height, type, special, start, end) {

}

function getFreeBabbage(traveler, flight) {
  let result = {}
  switch (traveler.type) {
    case Traveler.Type.头等舱:
      switch (flight.type) {
        case Flight.Type.国内航班:
          result = {
            maxWeight: 40,
            number:1,
            maxLength:60,
            maxWidth:40,
            maxHeight:100
          }
          break;
        default:
          result = {
            maxWeight:32,
            maxSize: 158,
            number:3,
          }
          break;
      }
      break;
    case Traveler.Type.公务舱:
      switch (flight.type) {
        case  Flight.Type.国内航班:
          result = {
            maxWeight: 30,
            number:1,
            maxLength:60,
            maxWidth:40,
            maxHeight:100
          }
          break;
        case  Flight.Type.区域四:
          result = {
            maxWeight: 23,
            number:3,
            maxSize: 158
          }
          break;
        default:
          result = {
            maxWeight: 32,
            number:2,
            maxSize: 158
          }
          break;
      }
      break;
    case Traveler.Type.明珠经济舱:
      if  (flight.type=== Flight.Type.区域四) {
          result = {
            maxWeight: 23,
            number:2,
            maxSize: 158
          }
          break;
      }
    case Traveler.Type.经济舱:
      switch (flight.type) {
        case  Flight.Type.国内航班:
          result = {
            maxWeight: 20,
            number:1,
            maxLength:60,
            maxWidth:40,
            maxHeight:100
          }
          break;
        case  Flight.Type.区域二_不涉及美国:
        case  Flight.Type.区域二_涉及美国:
          result = {
            maxWeight: 32,
            number:1,
            maxSize: 158
          }
          break;
        case  Flight.Type.区域四:
        case  Flight.Type.区域五:
          result = {
            maxWeight: 23,
            number:1,
            maxSize: 158,
          }
          break;
        default:
          result = {
            maxWeight: 23,
            number:2,
            maxSize: 158
          }
          break;
      }
      break;
    case Traveler.Type.不占座婴儿:
      switch (flight.type) {
        case  Flight.Type.国内航班:
          result = {
            maxWeight: 10,
            number:1,
            maxLength:60,
            maxWidth:40,
            maxHeight:100
          }
          break;
        default:
          result = {
            maxWeight: 10,
            number:1,
            maxSize: 115
          }
          break;
      }
      break;
  }
  return result
}
function howMuch(freeBabbage,myBabbage) {
  let result ={}
  for(let babbage in myBabbage){
    if(babbage.size()<=freeBabbage.maxLength){
      if(babbage.weight<=freeBabbage[0]){
        if (result.overWeight)result.overWeight=[]
        result.overWeight.push(babbage)
      }else{
      }
    }
  }
}
export {
  getFreeBabbage,
  Traveler,
  Flight,
  Baggage
};
