/* eslint-disable prettier/prettier */
import { Vote } from '@prisma/client'

export abstract class VotesRepository {
  abstract create(altcoinId: string, userId: string): Promise<void>;

  abstract findMany(): Promise<Vote[]>;

  abstract findByUserId(userId: string): Promise<Vote[]>;

  //abstract votesOfWeekByUserId(userId: string): Promise<Vote[]>;
//  function getMonday(d) {
//      d = new Date(d);
//      var day = d.getDay(),
//          diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
//      return new Date(d.setDate(diff));
//  }
//
//  getMonday(new Date()); // Mon Nov 08 2010

  //abstract votesOfWeek(): Promise<Vote[]>;

}