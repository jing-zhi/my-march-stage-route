
CREATE TABLE `category`(
	`categoryid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主题id',
	`pid` INT(10) NOT NULL COMMENT '父id',
	`categoryName` VARCHAR(50) NOT NULL COMMENT '主题名字',
	PRIMARY KEY (`categoryid`)
)ENGINE=INNODB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8

INSERT INTO `category` (`categoryid`,`pid`,`categoryName`)
VALUES('2','1','信息技术'),
('3','1','软件开发'),
('4','3','数据库'),
('5','1','美术设计'),
('6','3','web开发'),
('7','5','ps技术'),
('8','2','办公信息');

--查询父子信息

SELECT `subjectname`, `gradename`
FROM `subject` sub
INNER JOIN `grade` g
ON sub.`gradeid` = g.`gradeid`


--分页和排序-按成绩降序，查看学号，姓名，科目名称，成绩
SELECT s.studentno studentname,subjectname,studentresult
FROM student s
INNER JOIN result r
ON r.studentno = s.studentno
INNER JOIN `subject` sub
ON r.subjectno = sub.subjectno
WHERE subjectname='数据结构-1'
ORDER BY studentresult ASC

--每页显示3条数据
SELECT s.studentno studentname,subjectname,studentresult
FROM student s
INNER JOIN result r
ON r.studentno = s.studentno
INNER JOIN `subject` sub
ON r.subjectno = sub.subjectno
WHERE subjectname='数据结构-1'
ORDER BY studentresult DESC
LIMIT 0,3

-- 查询 JAVA第一学年 课程成绩前10名并且分数大于80的学生信息(学号,姓名,课程名,分数)
SELECT s.studentno studentname,subjectname,studentresult
FROM student s
INNER JOIN result r
ON r.studentno = s.studentno
INNER JOIN `subject` sub
ON r.subjectno = sub.subjectno
WHERE subjectname='Java程序设计-1'
ORDER BY studentresult DESC
LIMIT 0,2


--子查询（查询数据结构-1的所有考试结果）学号，科目编号，成绩，降序
--方法一，连接查询
SELECT studentno,r.subjectno,studentresult
FROM result r
INNER JOIN `subject` sub
ON r.`subjectno` = sub.`subjectno`
WHERE subjectname = '数据结构-1'
ORDER BY studentresult DESC;

--方法二
SELECT studentno,r.subjectno,studentresult
FROM result r
WHERE subjectno = (
	SELECT subjectno FROM `subject`
	WHERE subjectname = '数据结构-1'
)
ORDER BY studentresult DESC;














