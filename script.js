const title = document.createElement('h1');
title.textContent = 'Little Women';
title.style.fontSize = '48px';
title.style.fontFamily = 'Lucida Sans';
title.style.fontWeight = '600';
title.style.padding = '12px';
title.style.textAlign = 'center';

const aboutContainer = document.createElement('div');
aboutContainer.style.overflow = 'auto';
aboutContainer.style.width = '100%';
aboutContainer.style.margin = '0px 40px 80px 40px';
aboutContainer.style.display = 'flex';
aboutContainer.style.flexDirection = 'row';
aboutContainer.style.verticalAlign = 'top';

const imageDiv = document.createElement('div');
imageDiv.id = 'button_img';

const image = document.createElement('img');
image.id = 'img_book';
image.src = 'IMG_FA4429A30639-1.jpeg';
image.alt = 'img';
image.style.float = 'left';
image.style.width = '240px';
image.style.height = '320px';

const buyButton = document.createElement('button');
buyButton.className = 'button_primary';
buyButton.textContent = 'BUY NOW';
buyButton.style.border = 'none';
buyButton.style.borderRadius = '8px';
buyButton.style.color = '#ffff';
buyButton.style.backgroundColor = '#FFC1C1';
buyButton.style.padding = '16px 32px';
buyButton.style.textAlign = 'center';
buyButton.style.fontSize = '16px';
buyButton.style.fontWeight = '400';
buyButton.style.margin = '40px 40px 0px 40px';
buyButton.style.cursor = 'pointer';
buyButton.style.fontFamily = 'Lucida Sans';

const paragraphDiv = document.createElement('div');
paragraphDiv.id = 'p';
paragraphDiv.style.margin = '0px 40px 0px 40px';
paragraphDiv.style.display = 'flex';
paragraphDiv.style.flexDirection = 'column';
paragraphDiv.style.marginLeft = 'auto';
paragraphDiv.style.marginRight = '240px';

const paragraph = document.createElement('span');
paragraph.className = 'paragraph';
paragraph.textContent = `Little Women, novel for children by Louisa May Alcott, published in two parts in 1868 and 1869. Her sister May illustrated the first edition. It initiated a genre of family stories for children.

Meg, Jo, Beth, and Amy March are raised in genteel poverty by their loving mother, Marmee, in a quiet Massachusetts town while their father serves as an army chaplain during the American Civil War. They befriend Theodore Lawrence (Laurie), the lonely grandson of a rich old man next door. The vital force of the family is Jo, a headstrong tomboy who is the emotional centre of the book. In the course of the novel, beautiful, vain Meg marries Laurie’s tutor, John Brooke, and starts her own family; quiet, sickly Beth dies from scarlet fever; artistic Amy marries Laurie after he is turned down by Jo; and Jo marries Professor Bhaer, whom she meets while living in a boardinghouse, and together they set up a school for boys.TThe novel has two sequels: Little Men: Life at Plumfield with Jo’s Boys (1871) and Jo’s Boys and How They Turned Out (1886). Little Women also inspired numerous movies, including the 1933 classic, which starred Katharine Hepburn as Jo, and a 1994 film directed by Gillian Armstrong. In addition, director-screenwriter Greta Gerwig’s adaptation earned wide acclaim in 2019.`;
paragraph.style.fontSize = '16px';
paragraph.style.fontWeight = '100';
paragraph.style.textAlign = 'left';
paragraph.style.float = 'left';
paragraph.style.display = 'block';
paragraph.style.marginLeft = '60px';
paragraph.style.marginBottom = '40px';




