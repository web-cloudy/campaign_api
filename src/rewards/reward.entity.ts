import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity("reward")
class Reward {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty()
  @Column()
  public type: string;

  @ApiProperty()
  @Column()
  public category: string;

  @ApiProperty()
  @Column()
  public image_url: string;

  @ApiProperty()
  @Column()
  public description: string;

  @ApiProperty()
  @Column()
  public coinvalue: number;

  @ApiProperty()
  @Column()
  public ratelimit: number;

  @ApiProperty()
  @Column()
  public timelimit: number;
}

export default Reward;
