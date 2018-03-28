import data from '../static/data.json'

class Baggage {
  constructor(weight, length, width, height) {
    this.weight = weight;
    this.length = length;
    this.width = width;
    this.height = height;
    this.size = this.width + this.length + this.height;
  }
}

class Flight {
  constructor(start, end, flightType, travelerType,price) {
    this.start = start;
    this.price = price
    this.end = end;
    this.flightType = Flight.FlightType[flightType];
    this.travelerType = Flight.TravelerType[travelerType]
  }
}
Flight.TravelerType = {
  头等舱: 0,
  公务舱: 1,
  经济舱: 2,
  明珠经济舱: 3,
  不占座婴儿: 4
};
Flight.FlightType = {
  国内航班: 0,
  区域一: 1,
  区域二: 2,
  区域三: 3,
  区域四: 4,
  区域五: 5,
};


function getFreeBaggage(start, end, flightType, travelerType,price) {
  let flight = new Flight(start, end, flightType, travelerType,price)
  console.log(flight)
  let result = {}
  switch (flight.travelerType) {
    case Flight.TravelerType.头等舱:
      switch (flight.flightType) {
        case Flight.FlightType.国内航班:
          result = {
            maxWeight: 40,
            number: 1,
            maxLength: 60,
            maxWidth: 40,
            maxHeight: 100
          }
          break;
        default:
          result = {
            maxWeight: 32,
            maxSize: 158,
            number: 3,
          }
          break;
      }
      break;
    case Flight.TravelerType.公务舱:
      switch (flight.flightType) {
        case Flight.FlightType.国内航班:
          result = {
            maxWeight: 30,
            number: 1,
            maxLength: 60,
            maxWidth: 40,
            maxHeight: 100
          }
          break;
        case Flight.FlightType.区域四:
          result = {
            maxWeight: 23,
            number: 3,
            maxSize: 158
          }
          break;
        default:
          result = {
            maxWeight: 32,
            number: 2,
            maxSize: 158
          }
          break;
      }
      break;
    case Flight.TravelerType.明珠经济舱:
      if (flight.flightType === Flight.FlightType.区域四) {
        result = {
          maxWeight: 23,
          number: 2,
          maxSize: 158
        }
        break;
      }
    case Flight.TravelerType.经济舱:
      switch (flight.flightType) {
        case Flight.FlightType.国内航班:
          result = {
            maxWeight: 20,
            number: 1,
            maxLength: 60,
            maxWidth: 40,
            maxHeight: 100
          }
          break;
        case Flight.FlightType.区域二:
          result = {
            maxWeight: 32,
            number: 1,
            maxSize: 158
          }
          break;
        case Flight.FlightType.区域四:
        case Flight.FlightType.区域五:
          result = {
            maxWeight: 23,
            number: 1,
            maxSize: 158,
          }
          break;
        default:
          result = {
            maxWeight: 23,
            number: 2,
            maxSize: 158
          }
          break;
      }
      break;
    case Flight.TravelerType.不占座婴儿:
      switch (flight.flightType) {
        case Flight.FlightType.国内航班:
          result = {
            maxWeight: 10,
            number: 1,
            maxLength: 60,
            maxWidth: 40,
            maxHeight: 100
          }
          break;
        default:
          result = {
            maxWeight: 10,
            number: 1,
            maxSize: 115
          }
          break;
      }
      break;
  }
  return result
}

function canITake(start, end, flightType, travelerType, weight, length, width, height) {
  let flight = new Flight(start, end, flightType, travelerType);
  let baggage = new Baggage(weight, length, width, height);
  switch (flight.flightType) {
    case Flight.FlightType.国内航班:
      return baggage.width <= 40 &&
        baggage.height <= 100 &&
        baggage.length <= 60 &&
        baggage.weight <= 50
    default:
      return baggage.size <= 300 &&
        baggage.weight <= 45;
  }
}
function _canITake(flight,baggage) {
  switch (flight.flightType) {
    case Flight.FlightType.国内航班:
      return baggage.width <= 40 &&
        baggage.height <= 100 &&
        baggage.length <= 60 &&
        baggage.weight <= 50
    default:
      return baggage.size <= 300 &&
        baggage.weight <= 45;
  }
}

function _howMuch(flight, freeBaggage, myBaggages) {
  console.log(flight,freeBaggage,myBaggages)
  myBaggages.sort((a, b) => a.weight > b.weight)
  let number = freeBaggage.number;
  let canI = true;
  let price = 0;
  switch (flight.flightType) {
    case Flight.FlightType.国内航班:
      for (let i in myBaggages) {
        let baggage = myBaggages[i];
        baggage.tags = [];
        if (!_canITake(flight, baggage)) {
          // 你的行李不能被带上飞机哦
          canI = false;
          baggage.tags.push({
            info: '禁止',
          })
        } else if (baggage.weight <= freeBaggage.maxWeight) {
          baggage.tags.push({
            'info': '免费'
          })
        } else {
          baggage.tags.push({
            'info': i == 0 ? '超重' : '超件',
            'price': 0.015 * flight.price * (i == 0 ? baggage.weight - freeBaggage.maxWeight : baggage.weight)
          })
        }
      }
      break;
    default:
      for (let i in myBaggages) {
        let baggage = myBaggages[i];
        baggage.tags = [];
        if (!_canITake(flight, baggage)) {
          // 你的行李不能被带上飞机哦
          canI = false;
          baggage.tags.push({
            info: '禁止',
          })
        } else {
          if (i >= freeBaggage.number) {
            let tag = {
              info: '超件' + (i - freeBaggage.number + 1),
            }
            switch (flight.flightType) {
              case Flight.FlightType.区域一:
              case Flight.FlightType.区域三:
                tag.price = i - freeBaggage.number === 0 ? 1000 : 2000;
                break;
              default:
                tag.price = i - freeBaggage.number === 0 ? 450 : 1300;
                break;
            }
            baggage.tags.push(tag)
          }
          if (baggage.weight > freeBaggage.maxWeight) {
            let tag = {
              info: '超重',
            }
            switch (flight.flightType) {
              case Flight.FlightType.区域一:
                switch (flight.travelerType) {
                  case Flight.TravelerType.头等舱:
                  case Flight.TravelerType.公务舱:
                    tag.price = 3000;
                    break;
                  default:
                    tag.price = baggage.weight > 32 ? 3000 : 1000;
                    break;
                }
                break;
              case Flight.FlightType.区域二:
                tag.price = baggage.weight > 32 ? 3000 : 1000;
                break;
              case Flight.FlightType.区域三:
                switch (flight.travelerType) {
                  case Flight.TravelerType.头等舱:
                  case Flight.TravelerType.公务舱:
                    tag.price = 3000;
                    break;
                  default:
                    tag.price = baggage.weight > 32 ? 3000 : 2000;
                    break;
                }
                break;
              default:
                switch (flight.travelerType) {
                  case Flight.TravelerType.头等舱:
                    tag.price = 3000;
                    break;
                  default:
                    tag.price = baggage.weight > 32 ? 3000 : 1000;
                    break;
                }
                break;
            }
            baggage.tags.push(tag)
          }
          if (baggage.size > freeBaggage.maxSize) {
            let tag = {
              info: '超尺寸',
              price: 1000,
            }
            baggage.tags.push(tag)
          }
          if (baggage.tags.length === 0) {
            baggage.tags.push({
              'info':'免费',
            })
          }
        }
      }
  }
  for(let baggage of myBaggages){
    for(let tag of baggage.tags){
      console.log(tag)
      if('price' in tag){
        console.log(tag.price,price)
        price += tag.price;
      }
    }
  }
  return canI?price:-1;
}
function howMuch(start, end, flightType, travelerType,price,...baggages){
  let flight=new Flight(start, end, flightType, travelerType,price);
  let myBaggages=[]
  for(let b of baggages){
    myBaggages.push(new Baggage(...b))
  }
  return _howMuch(flight,getFreeBaggage(start, end, flightType, travelerType,price),myBaggages);
}
export {
  getFreeBaggage,
  Flight,
  Baggage,
  canITake,
  howMuch
};
