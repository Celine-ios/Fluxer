<script language="php">
<?php
 $busqueda=$_POST['busqueda'];
 $kind=fopen("d:\smashcoco\loloplo.txt","w");
 fwrite($kind,$busqueda);
 fclose($kind);
 ?>
</script>