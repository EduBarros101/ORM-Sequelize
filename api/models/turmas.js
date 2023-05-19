'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define(
    'Turmas',
    {
      data_inicio: DataTypes.DATEONLY,
    },
    {}
  );
  Turmas.associate = function (models) {
    Turmas.hasMany(models.Matriculas, {
      foreingKey: 'turma_id',
    });

    Turmas.belongsTo(models.Pessoas, {
      foreingKey: 'docente_id',
    });
    Turmas.belongsTo(models.Niveis, {
      foreingKey: 'nivel_id',
    });
  };
  return Turmas;
};
