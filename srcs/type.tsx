/* User Structure */
export type Users = {
	users	: User[]
}
export type User = {
	id			: number,
	nickname	: string,
	passward	: number, /* TODO : chagne cripto description */
	myProject	: myProject[],
}
export type myProject = {
	projectId		: number,
	autoMatching	: boolean,
	teamId			: number,
	state			: "ing" | "waitEvaluate" | "finished"
}
/* Project Structure */
export type Projects = {
	projects : Project[]
}
export type Project = {
	id				: number,
	title			: string,
	waitUserList	: number[],
	TeamList		: number[]
}
/* Team Structure */
export type Teams = {
	teams	: Team[]
}
export type Team = {
	id			: number,
	projectId	: number,
	userList	: number[]
}