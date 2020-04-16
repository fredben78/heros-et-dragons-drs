import {stats} from '../../data/stats'

// Calcul du modificateur de caractéristique
export function getModifier (score) {
  return Math.floor((score - 10) / 2)
}

// Ajoute un + devant les valeurs positives pour l'affichage
export function displayBonus (value) {
  if (value >= 0) {
    value = '+' + value
  }
  return value
}

// Affichage d'un score de caractéristiques sous la forme 16 (+3)
export function displayAbilityScore (score) {
  let modifier = getModifier(score)
  if (modifier >= 0) {
    modifier = '+' + modifier
  }
  return score + ' (' + modifier + ')'
}

// Calcul du bonus de maîtrise en fonction du niveau
export function getProficiencyBonus (level) {
  return Math.ceil(level / 4) + 1
}

// Affiche l'indice de dangerosité
export function displayChallenge (challenge, xp = false) {
  let result = ''
  if (stats.challenges[challenge]) {
    result += stats.challenges[challenge].label
    if (xp) {
      result += ' (PX : ' + stats.challenges[challenge].xp + ')'
    }
    return result
  }
  return challenge
}