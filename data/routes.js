// add pages which you want to the array.
// and make the file in the page folder.

export const routes = {
  LOGGED_IN: [
    { name: "Acasă", link: "/" },
    { name: "Despre", link: "/despre" },
    { name: "Informează-te!", link: "/informeaza" },
    { name: "Anunțuri", link: "/anunturi" },
    { name: "Puncte de reciclare", link: "/puncteReciclare" },
    { name: "Raportează probleme", link: "/raporteazaProbleme" },
    { name: "Campanii de reciclare", link: "/campaniiReciclare" },
  ],
  LOGGED_OUT: [
    { name: "Acasă", link: "/" },
    { name: "Despre", link: "/despre" },
    { name: "Informează-te!", link: "/informeaza" },
    { name: "Anunțuri", link: "/anunturi" },
    { name: "Puncte de reciclare", link: "/puncteReciclare" },
    { name: "Campanii de reciclare", link: "/campaniiReciclare" },
    { name: "Logare", link: "/signin" },
  ],
  ARTICLES: [
    {
      name: "Ce este reciclarea?",
      link: "/articolul1",
      descriere:
        "În timp ce reciclarea este bună din multe puncte de vedere, scopul final al acesteia este de a-i determina pe oameni să prevină risipa în primul rând.",
    },
    {
      name: "Pașii reciclării",
      link: "/articolul2",
      descriere:
        "Există atât de multe materiale care pot fi reciclate în societatea actuală; ar fi nevoie de o carte pentru a intra în detaliu despre fiecare. Mai jos, totuși, sunt enumerate câteva...",
    },
    {
      name: "Materiale reciclabile",
      link: "/articolul3",
      descriere:
        "Există atât de multe materiale care pot fi reciclate în societatea actuală; ar fi nevoie de o carte pentru a intra în detaliu desprefiecare. Mai jos, totuși, sunt enumerate câteva...",
    },
    {
      name: "De ce să reciclăm?",
      link: "/articolul4",
      descriere:
        "Reciclarea reduce consumul de energie și volumul de emisii. Reciclând o conservă de aluminiu puteți economisi 90 % din energia necesară pentru a produce...",
    },
    {
      name: "Ziua reciclării",
      link: "/articolul5",
      descriere:
        "Sărbătorită pe 18 martie în fiecare an, este o inițiativă de reciclare care ne încurajează să privim gunoiul într-o nouă lumină. Există mai multe modalități de reciclare...",
    },
    {
      name: "Informații importante",
      link: "/articolul6",
      descriere:
        "Peste 50% din cutiile de aluminiu produse sunt reciclate. Fiecare gospodărie din Marea Britanie folosește aproximativ 600 de cutii de oțel pe an.",
    },
    {
      name: "Beneficiile mediului",
      link: "/articolul7",
      descriere:
        "Prin reciclare, oamenii pot împiedica milioane de tone de materiale să intre în gropile de gunoi, economisind spațiu pentru gunoiul care nu poate fi...",
    },
    {
      name: "Beneficii economice",
      link: "/articolul8",
      descriere:
        "  Reciclarea contribuie la o economie circulară în care totul este mai degrabă o resursă decât un deșeu. Programele de reciclare desfășurate în mod corespunzător...",
    },
  ],
};
