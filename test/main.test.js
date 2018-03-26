var {expect} = require('chai')

var {getFreeBabbage, Baggage, Traveler, Flight} = require('../src/main.js');

describe('免费行李额度的测试', function () {
  describe('国内航班的测试', () => {
    it('普通人员头等舱的测试', function () {
      expect(
          getFreeBabbage(
              new Traveler(Traveler.Type.头等舱, Traveler.SpecialType.普通人员),
              new Flight('', '', Flight.Type.国内航班))).to.be.deep.equal({ maxWeight:40,number:1,
        maxLength:60,
        maxWidth:40,
        maxHeight:100});
    });
    it('普通人员公务舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.公务舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.国内航班))).to.be.deep.equal({
        items: [30],
        maxLength: Number.MAX_VALUE
      });
    });
    it('普通人员明珠经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.明珠经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.国内航班))).to.be.deep.equal({
        items: [20],
        maxLength: Number.MAX_VALUE
      });
    });
    it('普通人员经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.国内航班))).to.be.deep.equal({
        items: [20],
        maxLength: Number.MAX_VALUE
      });
    });
    it('普通人员不占座婴儿的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.不占座婴儿, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.国内航班))).to.be.deep.equal({
        items: [10],
        maxLength: Number.MAX_VALUE
      });
    });
  })
  describe('区域1航班的测试', () => {
    it('普通人员头等舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.头等舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域一))).to.be.deep.equal({
        items: [32, 32, 32],
        maxLength: 158
      });
    });
    it('普通人员公务舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.公务舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域一))).to.be.deep.equal({
        items: [32, 32],
        maxLength: 158
      });
    });
    it('普通人员明珠经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.明珠经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域一))).to.be.deep.equal({
        items: [23, 23],
        maxLength: 158
      });
    });
    it('普通人员经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域一))).to.be.deep.equal({
        items: [23, 23],
        maxLength: 158
      });
    });
    it('普通人员不占座婴儿的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.不占座婴儿, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域一))).to.be.deep.equal({
        items: [10],
        maxLength: 115
      });
    });
  })
  describe('区域2航班的测试', () => {
    it('普通人员头等舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.头等舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域二_不涉及美国))).to.be.deep.equal({
        items: [32, 32, 32],
        maxLength: 158
      });
    });
    it('普通人员公务舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.公务舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域二_不涉及美国))).to.be.deep.equal({
        items: [32, 32],
        maxLength: 158
      });
    });
    it('普通人员明珠经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.明珠经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域二_不涉及美国))).to.be.deep.equal({
        items: [32],
        maxLength: 158
      });
    });
    it('普通人员经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域二_不涉及美国))).to.be.deep.equal({
        items: [32],
        maxLength: 158
      });
    });
    it('普通人员不占座婴儿的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.不占座婴儿, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域二_不涉及美国))).to.be.deep.equal({
        items: [10],
        maxLength: 115
      });
    });
  })
  describe('区域3航班的测试', () => {
    it('普通人员头等舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.头等舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域三))).to.be.deep.equal({
        items: [32, 32, 32],
        maxLength: 158
      });
    });
    it('普通人员公务舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.公务舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域三))).to.be.deep.equal({
        items: [32, 32],
        maxLength: 158
      });
    });
    it('普通人员明珠经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.明珠经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域三))).to.be.deep.equal({
        items: [23, 23],
        maxLength: 158
      });
    });
    it('普通人员经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域三))).to.be.deep.equal({
        items: [23, 23],
        maxLength: 158
      });
    });
    it('普通人员不占座婴儿的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.不占座婴儿, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域三))).to.be.deep.equal({
        items: [10],
        maxLength: 115
      });
    });
  })
  describe('区域4航班的测试', () => {
    it('普通人员头等舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.头等舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域四))).to.be.deep.equal({
        items: [32, 32, 32],
        maxLength: 158
      });
    });
    it('普通人员公务舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.公务舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域四))).to.be.deep.equal({
        items: [23, 23, 23],
        maxLength: 158
      });
    });
    it('普通人员明珠经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.明珠经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域四))).to.be.deep.equal({
        items: [23, 23],
        maxLength: 158
      });
    });
    it('普通人员经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域四))).to.be.deep.equal({
        items: [23],
        maxLength: 158
      });
    });
    it('普通人员不占座婴儿的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.不占座婴儿, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域四))).to.be.deep.equal({
        items: [10],
        maxLength: 115
      });
    });
  })
  describe('区域5航班的测试', () => {
    it('普通人员头等舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.头等舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域五))).to.be.deep.equal({
        items: [32, 32, 32],
        maxLength: 158
      });
    });
    it('普通人员公务舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.公务舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域五))).to.be.deep.equal({
        items: [32, 32],
        maxLength: 158
      });
    });
    it('普通人员明珠经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.明珠经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域五))).to.be.deep.equal({
        items: [23],
        maxLength: 158
      });
    });
    it('普通人员经济舱的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.经济舱, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域五))).to.be.deep.equal({
        items: [23],
        maxLength: 158
      });
    });
    it('普通人员不占座婴儿的测试', function () {
      expect(getFreeBabbage(new Traveler(Traveler.Type.不占座婴儿, Traveler.SpecialType.普通人员), new Flight('', '', Flight.Type.区域五))).to.be.deep.equal({
        items: [10],
        maxLength: 115
      });
    });
  })
});
