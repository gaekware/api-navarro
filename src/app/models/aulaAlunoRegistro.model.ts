import databaseService from '../database/database.service';

export type TipoRegistro = 'entrada' | 'saida';

export interface AulaAlunoRegistro {
    id_aula_aluno_registro?: number;
    tipo_registro: TipoRegistro;
    dthr_registro: Date;
    mac: number;
}

class AulaAlunoRegistroModel {
    async criarRegistro(registro: AulaAlunoRegistro): Promise<AulaAlunoRegistro> {
        try {
            const queryResult = await databaseService.query(
                `INSERT INTO public.aula_aluno_registro
                    (tipo_registro, dthr_registro, mac)
                VALUES($1, $2, $3)
                RETURNING *;`,
                [registro.tipo_registro, registro.dthr_registro, registro.mac]
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
}

export default new AulaAlunoRegistroModel();