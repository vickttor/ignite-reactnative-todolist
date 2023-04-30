import * as z from 'zod';

export const todoSchema = z.object({
  id: z.string().nonempty().uuid(),
  name: z.string({required_error: 'Nome é obrigatório'})
    .min(3, "Nome deve ter no mínimo 3 caracteres.")
    .max(50, "Nome deve ter no mínimo 50 caracteres."), 
  completed: z.boolean(),
  createdAt: z.string().datetime(),
})

export type TodoType = z.infer<typeof todoSchema>;
export type TodoListType = TodoType[]