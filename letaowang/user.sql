/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1_3306
Source Server Version : 50520
Source Host           : 127.0.0.1:3306
Source Database       : mydata

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2017-06-28 20:27:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL COMMENT '用户名',
  `password` varchar(20) DEFAULT NULL COMMENT '密码',
  `tel` char(11) DEFAULT NULL COMMENT '用户手机号',
  `retel` char(11) DEFAULT NULL COMMENT '推荐人手机号码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('14', null, '88888888', '18822892605', null);
INSERT INTO `user` VALUES ('15', null, '88888888', '18822892689', null);
INSERT INTO `user` VALUES ('16', null, '88888888', '18822892601', null);
