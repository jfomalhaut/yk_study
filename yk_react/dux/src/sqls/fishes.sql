create table product(
id int not null auto_increment,
name varchar(32),
price int,
src varchar(255),
check1 int,
check2 int,
PRIMARY KEY(id)
);

insert into product(name, price, src, check1, check2) values
('영광굴비', 12500, 'https://img-cf.kurly.com/shop/data/goods/1584496590885l0.jpg', 0, 0),
('도다리 2종', 13890, 'https://img-cf.kurly.com/shop/data/goods/1552887814245l0.jpg', 0, 0),
('절단 코다리', 21990, 'https://img-cf.kurly.com/shop/data/goods/1584509053186l0.jpg', 0, 0),
('물회', 8900, 'https://img-cf.kurly.com/shop/data/goods/1554104031692l0.jpg', 0, 0),
('통영 참병어', 2480, 'https://img-cf.kurly.com/shop/data/goods/1579245034865l0.jpg', 0, 0),
('오징어채', 3590, 'https://img-cf.kurly.com/shop/data/goods/1583891961890l0.jpg', 0, 0),
('손질 갈치 특대', 4490, 'https://img-cf.kurly.com/shop/data/goods/1583832125210l0.jpg', 0, 0),
('손질 갈치 대', 6900, 'https://img-cf.kurly.com/shop/data/goods/1583830451767l0.jpg', 0, 0),
('민어굴비', 12800, 'https://img-cf.kurly.com/shop/data/goods/1583128536523l0.jpg', 0, 0),
('부세조기', 14900, 'https://img-cf.kurly.com/shop/data/goods/1583130217666l0.jpg', 0, 0),
('참다랑어', 12800, 'https://img-cf.kurly.com/shop/data/goods/1582077875436l0.jpg', 0, 0),
('참가자미', 19000, 'https://img-cf.kurly.com/shop/data/goods/1580783973108l0.jpg', 0, 0);
