window.$docsify = {
  executeScript: true
};

<base href="/">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/styles.css">
<pacman-root>
</pacman-root>
<script src="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/runtime-es2015.js" type="module">
</script>
<script src="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/runtime-es5.js" nomodule defer>
</script>
<script src="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/polyfills-es5.js" nomodule defer>
</script>
<script src="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/polyfills-es2015.js" type="module">
</script>
<script src="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/vendor-es2015.js" type="module">
</script>
<script src="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/vendor-es5.js" nomodule defer>
</script>
<script src="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/main-es2015.js" type="module">
</script>
<script src="https://raw.githubusercontent.com/mimigreg/pacman/master/dist/pacman/main-es5.js" nomodule defer>
</script>

# Pacman

Essai de développement d'un PAC-MAN en respectant, de façon la plus proche possible, la version initiale.
Je me base principalement sur ce site : https://gameinternals.com/post/2072558330/understanding-pac-man-ghost-behavior
Pour sa description des comportements de fantômes et ses screenshots.
Il faudra que je trouve une autre spec complémentaires pour les aspects score, apparition des fruits (d'ailleurs à quoi servent-ils ??), règles de vies supplémentaires... s'il y en a... bref toutes les features que je ne connait pas forcément.

Histoire de corser un peu le jeu, je tente

- Je me base sur Angular. Je tenterai, une fois une v1 finie et si je ne suis pas lassé, l'aventure avec VueJS et ReactJS.
- Tout coder en français... sans accent (tout terme anglais au dela du langage et du framework est une erreur de ma part, vous pouvez me le signaler si le coeur vous en dit)
- Faire un rendu, le plus possible en CSS (Dessin des personnages, décors, ...)
- Rédaction des tests à la fin (Attention à tout nouveau codeur : ne jamais coder ses tests à la fin ! Ce que je fait a pour conséquences que je prenne un temps fou à coder des tests et que mon code soit très peu testable), histoire de voir si j'arrive à coder quelque chose de testable "sans ceinture". (Croyez moi, c'est très très dur)

Une fois le jeu quasi fonctionnel, je tenterais des optimisations histoire de le faire le moins gourmand possible et le plus maintenable possible

Il s'agit principalement d'un exercice :

- Plutôt ludique pour moi qui devrait m'occuper un bon moment avant que je me lasse.
- Un bon entrainement, et un moyen de faire le point.
- Après relecture, un bon exercice d'autocritique et d'identification d'antipatterns qui se seront glissées.
- Qui sait, si vous lisez ceci, un moyen d'échanger et pour moi d'apprendre et m'améliorer.

SPOILER : Le code commence pas mal à bruler les yeux, et je n'ai pas achevé les fonctionnionalités principales...
