var ITEM_NAMES_LOOKUP = new Map();
var ITEM_CUSTOM_LIMIT = new Map();

// Item name lookups for certain items where just transforming the name
// to sentence case isn't enough
ITEM_NAMES_LOOKUP.set("ENCHANTED_CARROT_STICK", "Enchanted Carrot on a Stick");
ITEM_NAMES_LOOKUP.set("HUGE_MUSHROOM_1", "Brown Mushroom Block");
ITEM_NAMES_LOOKUP.set("HUGE_MUSHROOM_2", "Red Mushroom Block");
ITEM_NAMES_LOOKUP.set(
  "ENCHANTED_HUGE_MUSHROOM_1",
  "Enchanted Brown Mushroom Block"
);
ITEM_NAMES_LOOKUP.set(
  "ENCHANTED_HUGE_MUSHROOM_2",
  "Enchanted Red Mushroom Block"
);
ITEM_NAMES_LOOKUP.set("SULPHUR", "Gunpowder");
ITEM_NAMES_LOOKUP.set("RABBIT", "Raw Rabbit");
ITEM_NAMES_LOOKUP.set("ENCHANTED_RABBIT", "Enchanted Raw Rabbit");
ITEM_NAMES_LOOKUP.set("RAW_FISH:1", "Raw Salmon");
ITEM_NAMES_LOOKUP.set("RAW_FISH:2", "Clownfish");
ITEM_NAMES_LOOKUP.set("RAW_FISH:3", "Pufferfish");
ITEM_NAMES_LOOKUP.set("INK_SACK:3", "Cocoa Beans");
ITEM_NAMES_LOOKUP.set("INK_SACK:4", "Lapis Lazuli");
ITEM_NAMES_LOOKUP.set("LOG", "Oak Log");
ITEM_NAMES_LOOKUP.set("LOG:1", "Spruce Log");
ITEM_NAMES_LOOKUP.set("LOG:2", "Birch Log");
ITEM_NAMES_LOOKUP.set("LOG_2:1", "Dark Oak Log");
ITEM_NAMES_LOOKUP.set("LOG_2", "Acacia Log");
ITEM_NAMES_LOOKUP.set("LOG:3", "Jungle Log");

ITEM_CUSTOM_LIMIT.set("BOOSTER_COOKIE", 128);
ITEM_CUSTOM_LIMIT.set("HOT_POTATO_BOOK", 256);
ITEM_CUSTOM_LIMIT.set("FUMING_POTATO_BOOK", 256);
ITEM_CUSTOM_LIMIT.set("COMPACTOR", 256);
ITEM_CUSTOM_LIMIT.set("DWARVEN_COMPACTOR", 256);
ITEM_CUSTOM_LIMIT.set("SUPER_COMPACTOR_3000", 256);
ITEM_CUSTOM_LIMIT.set("SUMMONING_EYE", 256);
ITEM_CUSTOM_LIMIT.set("MAGMA_BUCKET", 256);
ITEM_CUSTOM_LIMIT.set("PLASMA_BUCKET", 256);
ITEM_CUSTOM_LIMIT.set("RECOMBOBULATOR_3000", 256);
ITEM_CUSTOM_LIMIT.set("HARDENED_WOOD", 256);
ITEM_CUSTOM_LIMIT.set("ROCK_GEMSTONE", 256);
ITEM_CUSTOM_LIMIT.set("RARE_DIAMOND", 256);
ITEM_CUSTOM_LIMIT.set("JERRY_STONE", 256);
ITEM_CUSTOM_LIMIT.set("RED_NOSE", 256);
ITEM_CUSTOM_LIMIT.set("SHINY_PRISM", 256);
ITEM_CUSTOM_LIMIT.set("SPIRIT_DECOY", 256);
ITEM_CUSTOM_LIMIT.set("CANDY_CORN", 256);
ITEM_CUSTOM_LIMIT.set("SEARINHG_STONE", 256);
ITEM_CUSTOM_LIMIT.set("LAPIS_CRYSTAL", 256);
ITEM_CUSTOM_LIMIT.set("RED_SCARF", 256);
ITEM_CUSTOM_LIMIT.set("OPTICAL_LENS", 256);
ITEM_CUSTOM_LIMIT.set("AOTE_STONE", 256);
ITEM_CUSTOM_LIMIT.set("JADERALD", 256);
ITEM_CUSTOM_LIMIT.set("DRAGON_CLAW", 256);
ITEM_CUSTOM_LIMIT.set("BLAZE_WAX", 256);
ITEM_CUSTOM_LIMIT.set("NECROMANCER_BROOCH", 256);
ITEM_CUSTOM_LIMIT.set("SALMON_OPAL", 256);
ITEM_CUSTOM_LIMIT.set("PREMIUM_FLESH", 256);
ITEM_CUSTOM_LIMIT.set("SUSPICIOUS_VIAL", 256);
ITEM_CUSTOM_LIMIT.set("METEOR_SHARD", 256);
ITEM_CUSTOM_LIMIT.set("MIDAS_JEWEL", 256);
ITEM_CUSTOM_LIMIT.set("DIAMOND_ATOM", 256);
ITEM_CUSTOM_LIMIT.set("ONYX", 256);
ITEM_CUSTOM_LIMIT.set("ENDSTONE_GEODE", 256);
ITEM_CUSTOM_LIMIT.set("MOLTEN_CUBE", 256);
ITEM_CUSTOM_LIMIT.set("DIAMONITE", 256);
ITEM_CUSTOM_LIMIT.set("DRAGON_SCALE", 256);
ITEM_CUSTOM_LIMIT.set("PURE_MITHRIL", 256);
ITEM_CUSTOM_LIMIT.set("AMBER_MATERIAL", 256);
ITEM_CUSTOM_LIMIT.set("PRECURSOR_GEAR", 256);
ITEM_CUSTOM_LIMIT.set("WITHER_BLOOD", 256);
ITEM_CUSTOM_LIMIT.set("DEEP_SEA_ORB", 256);
ITEM_CUSTOM_LIMIT.set("BULKY_STONE", 256);
ITEM_CUSTOM_LIMIT.set("KUUDRA_MANDIBLE", 256);
ITEM_CUSTOM_LIMIT.set("SADAN_BROOCH", 256);
ITEM_CUSTOM_LIMIT.set("BLESSED_FRUIT", 256);
ITEM_CUSTOM_LIMIT.set("PETRIFIED_STARFALL", 256);
ITEM_CUSTOM_LIMIT.set("GIANT_TOOTH", 256);
ITEM_CUSTOM_LIMIT.set("DRAGON_HORN", 256);
ITEM_CUSTOM_LIMIT.set("REFINED_AMBER", 256);
ITEM_CUSTOM_LIMIT.set("LUCKY_DICE", 256);
ITEM_CUSTOM_LIMIT.set("GOLDEN_BALL", 256);
ITEM_CUSTOM_LIMIT.set("HOT_STUFF", 256);
ITEM_CUSTOM_LIMIT.set("LUXURIOUS_SPOOL", 256);
ITEM_CUSTOM_LIMIT.set("ROCK_CANDY", 256);
ITEM_CUSTOM_LIMIT.set("END_STONE_SHULKER", 256);
ITEM_CUSTOM_LIMIT.set("OBSIDIAN_TABLET", 256);
ITEM_CUSTOM_LIMIT.set("DARK_ORB", 256);
ITEM_CUSTOM_LIMIT.set("FURBALL", 256);
ITEM_CUSTOM_LIMIT.set("ENDER_MONOCLE", 256);
ITEM_CUSTOM_LIMIT.set("ACACIA_BIRDHOUSE", 256);
ITEM_CUSTOM_LIMIT.set("BEATING_HEART", 256);
ITEM_CUSTOM_LIMIT.set("MANDRAA", 256);
ITEM_CUSTOM_LIMIT.set("MAGMA_URCHIN", 256);
ITEM_CUSTOM_LIMIT.set("HORNS_OF_TORMENT", 256);
ITEM_CUSTOM_LIMIT.set("PRECIOUS_PEARL", 256);
ITEM_CUSTOM_LIMIT.set("ECCENTRIC_PAINTING", 256);
ITEM_CUSTOM_LIMIT.set("HAZMAT_ENDERMAN", 256);
ITEM_CUSTOM_LIMIT.set("VITAMIN_DEATH", 256);
ITEM_CUSTOM_LIMIT.set("SCORCHED_BOOKS", 256);

// Prettify item name function. Either looks up the definition in the list
// if available, or else just sentence cases the name.
export function prettify(string) {
  var result;
  if (ITEM_NAMES_LOOKUP.has(string)) {
    result = ITEM_NAMES_LOOKUP.get(string);
  } else {
    var sentence = string.toLowerCase().split("_");
    for (var i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    result = sentence.join(" ");
    result = result.replace(":", " : ");
    result = result.replace(" Item", "");
  }
  return result;
}

export function itemLimit(id) {
  if (ITEM_CUSTOM_LIMIT.has(id)) {
    return ITEM_CUSTOM_LIMIT.get(id);
  } else {
    return 71680;
  }
}

export function prepData(bazaarData) {
  if (bazaarData == null) {
    return [];
  }
  let data = [];
  Object.keys(bazaarData).map((id) => {
    var item = {};
    item.buySummary = bazaarData[id].buy_summary;
    item.sellSummary = bazaarData[id].sell_summary;

    if (
      !Array.isArray(item.buySummary) ||
      !Array.isArray(item.sellSummary) ||
      !item.buySummary.length > 0 ||
      !item.sellSummary.length > 0
    ) {
      return null;
    }

    //get sell and buy margins
    item.lowestSellOffer = Math.min.apply(
      Math,
      item.buySummary.map(function (o) {
        return o.pricePerUnit;
      })
    );
    item.highestBuyOrder = Math.max.apply(
      Math,
      item.sellSummary.map(function (o) {
        return o.pricePerUnit;
      })
    );

    //dont show enchantments

    //no point showing if you can't buy or sell

    //dont consider backlogs over a week
    var sellVolume = bazaarData[id].quick_status.sellVolume;
    var sellMovingWeek = bazaarData[id].quick_status.sellMovingWeek;
    var salesBacklog = sellVolume / (sellMovingWeek / 7.0);
    if (salesBacklog > 7) {
      return null;
    }

    item.id = bazaarData[id].product_id;
    item.name = prettify(item.id);
    if (item.name.startsWith("Enchantment ")) {
      return null;
    }
    item.sellPrice = item.lowestSellOffer - 0.1;
    item.buyPrice = item.highestBuyOrder + 0.1;

    if (item.sellPrice <= item.buyPrice) {
      return null;
    }

    item.profitPerItem = item.sellPrice - item.buyPrice;
    item.buyOrders = bazaarData[id].quick_status.buyOrders;
    item.sellOrders = bazaarData[id].quick_status.sellOrders;
    item.buyVolume = bazaarData[id].quick_status.buyVolume;
    item.sellVolume = bazaarData[id].quick_status.sellVolume;
    item.limit = itemLimit(item.id);

    if (item.sellVolume < 100 || item.buyVolume < 100) {
      return null;
    }
    // Calculate the sales backlog - how many days' worth of sell orders are
    // already on the marketplace - higher backlogs = higher chance you'll be
    // stuck with the items longer before you can sell them.
    item.sellVolume = bazaarData[id].quick_status.sellVolume;
    item.sellMovingWeek = bazaarData[id].quick_status.sellMovingWeek;
    item.salesBacklog = item.sellVolume / (item.sellMovingWeek / 7.0);
    data.push(item);
  });
  return data;
}
