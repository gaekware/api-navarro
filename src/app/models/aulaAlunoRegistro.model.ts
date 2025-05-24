import databaseService from '../database/database.service';

export type TipoRegistro = 'entrada' | 'saida';

export interface AulaAlunoRegistro {
    id_aula_aluno_registro?: number;
    tipo_registro: TipoRegistro;
    dthr_registro: Date;
    id_aula_aluno: number;
}

class AulaAlunoRegistroModel {
    async criarRegistro(registro: AulaAlunoRegistro): Promise<AulaAlunoRegistro> {
        try {
            const queryResult = await databaseService.query(
                `INSERT INTO public.aula_aluno_registro
                    (tipo_registro, dthr_registro, id_aula_aluno)
                VALUES($1, $2, $3)
                RETURNING *;`,
                [registro.tipo_registro, registro.dthr_registro, registro.id_aula_aluno]
            );

            if (queryResult.rowCount === 0) {
                throw new Error('Falha ao criar registro');
            }

            return queryResult.rows[0];
        } catch (error) {
            console.error('Erro no model ao criar registro:', error);
            throw error;
        }
    }

    async buscarRegistrosPorAluno(id_aula_aluno: number): Promise<AulaAlunoRegistro[]> {
        try {
            const queryResult = await databaseService.query(
                `SELECT * FROM public.aula_aluno_registro
                WHERE id_aula_aluno = $1
                ORDER BY dthr_registro DESC;`,
                [id_aula_aluno]
            );

            return queryResult.rows;
        } catch (error) {
            console.error('Erro no model ao buscar registros:', error);
            throw error;
        }
    }
}

export default new AulaAlunoRegistroModel();