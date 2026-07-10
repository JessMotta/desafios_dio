import z from 'zod';

export const UserSchema = z.object({
	id: z.number(),
	username: z.string(),
	email: z.email(),
});

export type IUser = z.infer<typeof UserSchema>;
