import { Quiz } from "@/types/quiz";

export const quiz924: Quiz = {
  id: "924",
  titre: "Animaux : Des Pôles et du Froid ❄️🐻",
  description: "Direction l'Arctique et l'Antarctique pour voir comment on survit dans le froid.",
  theme: "Nature",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Où vit l'ours polaire ?",
      options: ["Au Pôle Sud (Antarctique)", "Au Pôle Nord (Arctique)", "Dans les Alpes", "Au désert"],
      reponse: "Au Pôle Nord (Arctique)",
      explication: "Il n'y a pas d'ours polaires au Pôle Sud."
    },
    {
      id: "2",
      type: "qcm",
      question: "Où vivent les manchots ?",
      options: ["Au Pôle Nord", "Au Pôle Sud (Antarctique)", "En Europe", "En Afrique du Sud (uniquement)"],
      reponse: "Au Pôle Sud (Antarctique)",
      explication: "Contrairement à une idée reçue, ours polaires et manchots ne se rencontrent jamais."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le manchot peut voler comme un oiseau classique.",
      reponse: "Faux",
      explication: "Ses ailes lui servent de nageoires pour être très rapide sous l'eau."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'oiseau du Grand Nord qui a appris à voler (contrairement au manchot) et qui a un petit bec noir et blanc ?",
      reponse: "Pingouin",
      explication: "En français, c'est le pingouin qui vole, et le manchot qui ne vole pas."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel animal possède de longues défenses et une peau très grasse pour se protéger du froid ?",
      options: ["L'otarie", "Le morse", "Le phoque", "Le renne"],
      reponse: "Le morse",
      explication: "Ses défenses lui servent à grimper sur la glace."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La fourrure de l'ours polaire est blanche pour se camoufler dans la neige.",
      reponse: "Vrai",
      explication: "En réalité, ses poils sont translucides et sa peau est noire pour absorber la chaleur du soleil."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel animal aux bois magnifiques aide le Père Noël dans la légende et vit dans le Grand Nord ?",
      options: ["L'élan", "Le renne", "Le cerf", "Le chevreuil"],
      reponse: "Le renne",
      explication: "On l'appelle 'Caribou' au Canada."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel petit renard change de couleur selon la saison, devenant tout blanc l'hiver ?",
      reponse: "Renard polaire",
      explication: "Ou renard isatis."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces mammifères marins est capable d'imiter le chant des oiseaux et possède une magnifique couleur blanche ?",
      options: ["La baleine bleue", "Le béluga", "L'orque", "Le cachalot"],
      reponse: "Le béluga",
      explication: "On l'appelle 'le canari des mers' à cause de ses sifflements."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le 'Manchot Empereur' couve son œuf sur ses pattes sous un repli de peau pendant l'hiver antarctique.",
      reponse: "Vrai",
      explication: "C'est l'un des modes de reproduction les plus difficiles au monde."
    }
  ]
};
