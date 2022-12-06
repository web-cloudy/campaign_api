import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "./address.entity";
import Event from "src/events/event.entity";
import Attend from "src/attends/attend.entity";
import { IsPhoneNumber } from "class-validator";
import Reward from "src/rewards/reward.entity";
import { ApiProperty } from "@nestjs/swagger";
import Audience from "src/audiences/audiences.entity";

@Entity("user")
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column({ default: "logo" })
  public logo?: string;

  @Column({ default: "+1 222 222 2222" })
  public phone?: string;

  @Column({ default: "subscription" })
  public subscription?: string;

  @Column()
  //@Exclude()
  public password: string;

  @Column({ default: 0 })
  public coins?: number;

  @Column({ default: 0 })
  public coinsused?: number;

  @Column({ default: 0 })
  public completion: number;

  @ApiProperty()
  @CreateDateColumn({
    type: "timestamptz", // timestamptz
    default: () => "CURRENT_TIMESTAMP(6)", // "CURRENT_TIMESTAMP(6)",
  })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt: Date;

  // @Column({ default: 0 })
  // public join_event_id?: number;

  @OneToOne(() => Address, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => Event, (event) => event.user)
  public events: Event[];

  @OneToMany(() => Reward, (reward) => reward.user)
  public rewards: Reward[];

  // @OneToMany(() => Attend, (attend) => attend.user)
  // public attends: Attend[];

  @ManyToOne(() => Audience, (audience) => audience.users)
  public audience: Audience;
}

export default User;
