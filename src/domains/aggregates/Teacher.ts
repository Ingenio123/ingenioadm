import { ITeacherEntity, ITeacherData } from "./interfaces/iTeacher";

class Board implements ITeacherEntity {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _lastaName: string;
  private readonly _eslogan: string;
  private readonly _description: string;
  private readonly _interests: string;
  private readonly _profBackground: string;

  constructor(params: ITeacherData) {
    this._id = params.id;
    this._name = params.name;
    this._eslogan = params.eslogan;
    this._description = params.description;
    this._interests = params.interests;
    this._profBackground = params.profBackground;
  }

  pushComment(commentList: Array<ICommentEntity>) {
    this._comments = this._comments.concat(commentList);
    return this;
  }

  get id() {
    return this._id;
  }

  get comments() {
    return this._comments;
  }

  get author() {
    return this._author;
  }

  get content() {
    return this._content;
  }

  get createAt() {
    return this._createAt;
  }
}

export default Board;
