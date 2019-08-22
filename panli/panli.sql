/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : panli

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-09-11 20:24:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `banner`
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1', 'http://img.panlidns.com/CMS/Template/2826e2ca-7f2e-490f-a781-3fd43d2b87f5.jpg');
INSERT INTO `banner` VALUES ('2', 'http://img.panlidns.com/CMS/Template/b864e4b6-f280-44ae-bdca-4525e7974db1.jpg');
INSERT INTO `banner` VALUES ('3', 'http://img.panlidns.com/CMS/Template/7421a257-93c4-4540-ba6b-6c4a00e819a5.jpg');
INSERT INTO `banner` VALUES ('4', 'http://img.panlidns.com/CMS/Template/3776086a-2a79-44a4-a11b-3f23a46cdead.jpg');

-- ----------------------------
-- Table structure for `details`
-- ----------------------------
DROP TABLE IF EXISTS `details`;
CREATE TABLE `details` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(1000) NOT NULL,
  `title` varchar(40) NOT NULL,
  `price` double(8,2) NOT NULL,
  `sellname` varchar(20) NOT NULL,
  `colortype` varchar(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of details
-- ----------------------------
INSERT INTO `details` VALUES ('1', 'http://img.alicdn.com/imgextra/i1/704298669/TB2fZBRn4SYBuNjSspjXXX73VXa_!!704298669.jpg,http://img.alicdn.com/imgextra/i4/704298669/TB1cSpEoH1YBuNjSszhXXcUsFXa_!!0-item_pic.jpg,http://img.alicdn.com/imgextra/i1/704298669/TB2FSr9nQCWBuNjy0FaXXXUlXXa_!!704298669.jpg,http://img.alicdn.com/imgextra/i3/704298669/TB25LAVnKOSBuNjy0FdXXbDnVXa_!!704298669.jpg,http://img.alicdn.com/imgextra/i3/704298669/TB2wJuxeFooBKNjSZPhXXc2CXXa_!!704298669.jpg', '大喜自制2018夏新款复古红露背中长款裙子温柔风超仙小...', '198.00', '大喜自制独立复古女装..', '大喜红,奶茶色,艺术蓝');
INSERT INTO `details` VALUES ('2', 'http://img.alicdn.com/imgextra/i1/81380/TB2Hf6pfeOSBuNjy0FdXXbDnVXa_!!81380.jpg,http://img.alicdn.com/imgextra/i6/TB1O7SSfhWYBuNjy1zkYXFGGpXa_M2.SS2,http://img.alicdn.com/imgextra/i2/TB1HZGwfaSWBuNjSsrbYXG0mVXa_M2.SS2,http://img.alicdn.com/imgextra/i8/TB1Ii5qfbuWBuNjSszgYXH8jVXa_M2.SS2,http://img.alicdn.com/imgextra/i2/TB1HZGwfaSWBuNjSsrbYXG0mVXa_M2.SS2', 'THE CAKE 和风碎花V领裹身收腰短款上衣女2018春夏轻薄...', '159.00', 'MG小镇 不浮夸不造作', '红色');
INSERT INTO `details` VALUES ('3', 'http://img.alicdn.com/imgextra/i1/883696985/TB29Y_lhsyYBuNkSnfoXXcWgVXa_!!883696985.jpg,http://img.alicdn.com/imgextra/i4/883696985/TB2s8oJpL5TBuNjSspmXXaDRVXa_!!883696985.jpg,http://img.alicdn.com/imgextra/i1/883696985/TB2oF9LhByWBuNkSmFPXXXguVXa_!!883696985.jpg,http://img.alicdn.com/imgextra/i2/883696985/TB28rg.pNGYBuNjy0FnXXX5lpXa_!!883696985.jpg,http://img.alicdn.com/imgextra/i4/883696985/TB2xrG3hsyYBuNkSnfoXXcWgVXa_!!883696985.jpg', 'A7seven后背打结宽松纯色圆领短袖T恤女夏季2018新款百...', '59.00', 'A7SEVEN 定制女装', '白色,黑色,红色,姜黄色,墨绿色');
INSERT INTO `details` VALUES ('4', 'http://img.alicdn.com/imgextra/i4/47832380/TB22BOomuSSBuNjy0FlXXbBpVXa_!!47832380.jpg,http://img.alicdn.com/imgextra/i2/47832380/TB2dgeSmACWBuNjy0FaXXXUlXXa_!!47832380.jpg,http://img.alicdn.com/imgextra/i1/47832380/TB2QuazmuySBuNjy1zdXXXPxFXa_!!47832380.jpg,http://img.alicdn.com/imgextra/i2/47832380/TB2F5armx1YBuNjy1zcXXbNcXXa_!!47832380.jpg,http://img.alicdn.com/imgextra/i2/47832380/TB2fQYWfZuYBuNkSmRyXXcA3pXa_!!47832380.jpg', '禾西家 百搭小领结夏款圆领短袖冰丝黑白条纹T恤女2018...', '138.00', 'HERCY禾西家 名媛风裳...', '黑色');
INSERT INTO `details` VALUES ('5', 'http://img.alicdn.com/imgextra/i1/TB1bXfWPVXXXXauXpXXXXXXXXXX_!!0-item_pic.jpg,http://img.alicdn.com/imgextra/i1/1578673915/TB1VvNltrorBKNjSZFjXXc_SpXa_!!0-item_pic.jpg,http://img.alicdn.com/imgextra/i4/1578673915/TB2hU_XkkZmBKNjSZPiXXXFNVXa_!!1578673915.jpg,http://img.alicdn.com/imgextra/i3/1578673915/TB2agzfhSxjpuFjSszeXXaeMVXa_!!1578673915.jpg,http://img.alicdn.com/imgextra/i2/1578673915/TB2skl2uXXXXXaVXXXXXXXXXXXX_!!1578673915.jpg', '婴儿连体衣服秋装初生女宝宝秋装0-3岁12满月3个月新生...', '29.00', '蓓莱乐旗舰店', '粉色,白色,灰色');
INSERT INTO `details` VALUES ('6', 'http://img.alicdn.com/imgextra/i2/2435700958/TB1TOR3s79WBuNjSspeXXaz5VXa_!!0-item_pic.jpg,http://img.alicdn.com/imgextra/i2/2435700958/TB2VU4ehxPI8KJjSspoXXX6MFXa_!!2435700958.jpg,http://img.alicdn.com/imgextra/i2/2435700958/TB2vUifjlmWBuNkSndVXXcsApXa_!!2435700958.jpg,http://img.alicdn.com/imgextra/i1/2435700958/TB2Goo3hhHI8KJjy1zbXXaxdpXa_!!2435700958.jpg,http://img.alicdn.com/imgextra/i1/2435700958/TB2FYG_iTdYBeNkSmLyXXXfnVXa_!!2435700958.jpg', '儿童小猫钓鱼玩具女孩宝宝木质钓鱼磁性1-2-3一岁半益智...', '39.00', 'MTSL早教中心', '原木底座,蓝色彩印底座,圆盘两用钓鱼');
INSERT INTO `details` VALUES ('7', 'http://img.alicdn.com/imgextra/i4/677812813/O1CN011WeOaU3TF9QzcmE_!!677812813.jpg,http://img.alicdn.com/imgextra/i3/677812813/TB2ZUH0uDqWBKNjSZFAXXanSpXa_!!677812813.jpg,http://img.alicdn.com/imgextra/i1/677812813/TB2hzgPChSYBuNjSsphXXbGvVXa_!!677812813.jpg,http://img.alicdn.com/imgextra/i4/677812813/TB2kCKnpHZnBKNjSZFGXXbt3FXa_!!677812813.jpg,http://img.alicdn.com/imgextra/i4/677812813/TB2L7JSFQyWBuNjy0FpXXassXXa_!!677812813.jpg', '小黄鸭2018新款妈咪包双肩多功能大容量母婴包妈妈外出...', '268.00', 'semk旗舰店', '动物园,糖果甜心,3D鸭嘴');
INSERT INTO `details` VALUES ('8', 'http://img.alicdn.com/imgextra/i1/TB1nXK0X_SPY1JjSZPcYXFIwpXa_M2.SS2,http://img.alicdn.com/imgextra/i5/TB1kPAjlyAKL1JjSZFoYXGgCFXa_M2.SS2,http://img.alicdn.com/imgextra/i4/TB1rEaefhOMSKJjSZFlYXFqQFXa_M2.SS2,http://img.alicdn.com/imgextra/i5/TB1BK5zXchmZKJjSZFPYXI5_XXa_M2.SS2,http://img.alicdn.com/imgextra/i2/TB1KQl4eo1HTKJjSZFmYXFeYFXa_M2.SS2', '宝宝头饰饰品可爱小号滴胶bb夹小女孩头饰儿童发夹女童...', '10.60', '米莎儿童发饰', '星星小号夹6对,花朵小号夹6对,渐变色中号夹6对');
INSERT INTO `details` VALUES ('9', 'http://img.alicdn.com/imgextra/i3/2986429393/TB1asjatScqBKNjSZFgXXX_kXXa_!!0-item_pic.jpg,http://img.alicdn.com/imgextra/i3/2986429393/TB2tB2ZaSY9F1JjSZFFXXaBKXXa_!!2986429393.jpg,http://img.alicdn.com/imgextra/i3/2986429393/TB2Iqc3X.ifF1JjSspdXXclLpXa_!!2986429393.jpg,http://img.alicdn.com/imgextra/i1/2986429393/TB2IsnZaS_9F1JjSZFrXXcrVFXa_!!2986429393.jpg,http://img.alicdn.com/imgextra/i2/2986429393/TB24hM3X0qgF1JjSsziXXXL.XXa_!!2986429393.jpg', '日式蝴蝶结亚麻拖鞋女夏居家室内可爱木地板软底防滑家...', '24.90', '足乐资旗舰店', '粉色,浅灰');
INSERT INTO `details` VALUES ('10', 'http://img.alicdn.com/imgextra/i4/2938454519/TB2vhlhrN9YBuNjy0FfXXXIsVXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i4/2938454519/TB2sRknolDH8KJjSspnXXbNAVXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i2/2938454519/TB2dY7dfOMnBKNjSZFoXXbOSFXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i3/2938454519/TB2xc66ocnI8KJjSspeXXcwIpXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i1/2938454519/TB2kFbModfJ8KJjy0FeXXXKEXXa_!!2938454519.jpg', '居家家 粘贴置物架厨房壁挂收纳盒 宿舍卧室墙上免打孔...', '9.90', '居家家旗舰店', '一孔浅灰,一孔浅粉');
INSERT INTO `details` VALUES ('11', 'http://img.alicdn.com/imgextra/i2/2938454519/TB2lXrIt1OSBuNjy0FdXXbDnVXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i4/2938454519/TB23mTJioR1BeNjy0FmXXb0wVXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i2/2938454519/TB23PV1g77mBKNjSZFyXXbydFXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i2/2938454519/TB285fnibSYBuNjSspfXXcZCpXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i1/2938454519/TB2wXmTiaSWBuNjSsrbXXa0mVXa_!!2938454519.jpg', '免钉粘胶挂钩壁挂门后挂衣钩8个装 厨房浴室墙壁卡通粘...', '9.90', '居家家旗舰店', '透明8个,白色8个,混色8个');
INSERT INTO `details` VALUES ('12', 'http://img.alicdn.com/imgextra/i2/2938454519/TB20ZK_dd0opuFjSZFxXXaDNVXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i2/2938454519/TB2bfHGj8jTBKNjSZFuXXb0HFXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i1/2938454519/TB219rfddXnpuFjSZFoXXXLcpXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i3/2938454519/TB21CDCBUR1BeNjy0FmXXb0wVXa_!!2938454519.jpg,http://img.alicdn.com/imgextra/i2/2938454519/TB20ZK_dd0opuFjSZFxXXaDNVXa_!!2938454519.jpg', '居家家吸盘式毛巾架厨房抹布挂架免打孔毛巾杆挂毛巾的...', '16.90', '居家家旗舰店', '蓝,粉,绿');

-- ----------------------------
-- Table structure for `indeximg`
-- ----------------------------
DROP TABLE IF EXISTS `indeximg`;
CREATE TABLE `indeximg` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indeximg
-- ----------------------------
INSERT INTO `indeximg` VALUES ('1', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636664953861018327.jpg');
INSERT INTO `indeximg` VALUES ('2', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636664954281722390.jpg');
INSERT INTO `indeximg` VALUES ('3', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636664954652183579.jpg');
INSERT INTO `indeximg` VALUES ('4', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636664955224846334.jpg');
INSERT INTO `indeximg` VALUES ('5', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636667412254710404.jpg');
INSERT INTO `indeximg` VALUES ('6', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636667412538886658.jpg');
INSERT INTO `indeximg` VALUES ('7', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636667412877035999.jpg');
INSERT INTO `indeximg` VALUES ('8', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636667413166962581.jpg');
INSERT INTO `indeximg` VALUES ('9', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636664956114047193.jpg');
INSERT INTO `indeximg` VALUES ('10', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636664956433145445.jpg');
INSERT INTO `indeximg` VALUES ('11', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636664956719191806.jpg');
INSERT INTO `indeximg` VALUES ('12', 'http://img.panlidns.com/CMS/bianjiImage/cImg/636664956991417376.jpg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(99) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13', 'bc', 'e10adc3949ba59abbe56e057f20f883e', 'fdghvj@13.com', '0000-00-00 00:00:00');
INSERT INTO `user` VALUES ('14', 'ycc', 'e10adc3949ba59abbe56e057f20f883e', 'ghhgg@gh.com', '0000-00-00 00:00:00');
INSERT INTO `user` VALUES ('15', 'ccc', 'fcea920f7412b5da7be0cf42b8c93759', '12343@163.com', '2018-09-04 10:57:51');
INSERT INTO `user` VALUES ('16', 'hhs', '0c638f5f576a67cea372ad29868f3e7e', 'efrrtr@2ee.com', '2018-09-04 10:59:01');
INSERT INTO `user` VALUES ('17', 'hhs', '0c638f5f576a67cea372ad29868f3e7e', 'efrrtr@2ee.com', '2018-09-04 11:00:23');
INSERT INTO `user` VALUES ('18', 'yc', 'e10adc3949ba59abbe56e057f20f883e', '1434896942@qq.com', '2018-09-05 11:04:33');
INSERT INTO `user` VALUES ('19', 'cc', 'e10adc3949ba59abbe56e057f20f883e', '1434896942@qq.com', '2018-09-05 11:05:34');
INSERT INTO `user` VALUES ('20', 'admin', 'e10adc3949ba59abbe56e057f20f883e', '1345678@ds', '2018-09-06 14:06:38');
INSERT INTO `user` VALUES ('21', 'asd', 'a3dcb4d229de6fde0db5686dee47145d', 'sdasd@163.com', '2018-09-06 19:29:13');
INSERT INTO `user` VALUES ('22', 'zxczxczxc', '7aa3262b9526ff30025c2f389263399e', 'zxczxczxc@163.com', '2018-09-06 19:29:35');
INSERT INTO `user` VALUES ('23', 'abc', '25d55ad283aa400af464c76d713c07ad', 'jhfjdh@gh', '2018-09-06 19:40:32');
INSERT INTO `user` VALUES ('24', 'woshiyc', '4297f44b13955235245b2497399d7a93', 'yuchao@163.com', '2018-09-06 20:03:38');
INSERT INTO `user` VALUES ('25', 'yu', 'e10adc3949ba59abbe56e057f20f883e', 'gsdfg@fdg', '2018-09-06 21:48:52');
INSERT INTO `user` VALUES ('26', 'huang', 'e10adc3949ba59abbe56e057f20f883e', 'jhyu@gf', '2018-09-06 21:49:53');
INSERT INTO `user` VALUES ('27', 'rr', 'e10adc3949ba59abbe56e057f20f883e', 'hjyhj@gfk', '2018-09-06 21:50:47');
