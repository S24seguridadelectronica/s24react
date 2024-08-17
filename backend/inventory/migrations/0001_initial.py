from django.db import migrations, models

class Migration(migrations.Migration):

    initial = True

    dependencies = [
        # Aquí puedes agregar las dependencias de otras migraciones, si las hay
    ]

    operations = [
        # Aquí defines las operaciones de la migración, como crear tablas, agregar campos, etc.
        migrations.CreateModel(
            name='ModelName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                # Agrega otros campos aquí
            ],
        ),
    ]
