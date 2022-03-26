/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc:
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", default: '', length: 32 })
  code: string; // 

  @Column({type: "varchar", default: '', length: 64 })
  name: string; // 书名

  @Column({type: "varchar", default: '', length: 200 })
  desc: string; // 简介

  @Column({type: "varchar", default: '', length: 100 })
  author: string; // 作者

  @Column()
  size: number; // 大小

  @Column({type: "varchar", default: '1', length: 100 })
  cover: string; // 封面

  @Column({type: "varchar", default: '', length: 200 })
  about: string; // 导读

  @Column({type: "varchar", default: '', length: 100 })
  link: string; // 链接

  @Column({ type: 'int', default: 0 })
  format: number; // 格式

  @Column({type: 'int', default: 0 })
  tag: number; // 标记 

  @Column({ type: 'int', default: 0 })
  status: number; // 状态

  @Column({ type: 'int', default: 0 })
  classify: number; // 类型

  @Column({ type: 'int', default: 0 })
  star: number; // 推荐星级

  @Column({ default: 0 })
  price: number; // 价格

  @Column({default: 0 })
  num: number; // 浏览次数

  @Column({default: 0 })
  collect: number; // 收藏次数

  @Column({type: "varchar", default: '', length: 20 })
  create_date: string; // 创建日期 xxxx-MM-dd hh:mm:ss

}
