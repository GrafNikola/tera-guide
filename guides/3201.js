// Gossamer Vault (Hard)
//
// made by michengs

module.exports = (dispatch, handlers, guide, lang) => {
	let notice = true;
	let boss = null;
	let secondboss = false;

	function secondboss_start_event() {
		secondboss = true;
		notice = true;
		boss = null;
	}

	function secondboss_debuff_event(skillid) {
		if (skillid === 32010224) { // false debuff (next true)
			boss = 1;

			dispatch.setTimeout(() => {
				if (boss === 1) {
					handlers.text({
						sub_type: "message",
						message_RU: "Смена дебаффа",
						message: "Debuff reload"
					});
					boss = null;
				}
			}, 80000);
		}

		if (skillid === 32010220) { // true debuff (next false)
			boss = 0;

			dispatch.setTimeout(() => {
				if (boss === 0){
					handlers.text({
						sub_type: "message",
						message_RU: "Смена дебаффа",
						message: "Debuff reload"
					});
					boss = null;
				}
			}, 80000);
		}

		if ([203, 204].includes(skillid)) {
			notice = false;
			dispatch.setTimeout(() => notice = true, 4000);

			dispatch.setTimeout(() => {
				handlers.text({
					sub_type: "alert",
					message_RU: "Скоро дебафф...",
					message: "Debuff coming soon..."
				});
			}, 55000);
		}

		if (notice && skillid === 234) {
			dispatch.setTimeout(() => {
				handlers.text({
					sub_type: "alert",
					message_RU: "Скоро дебафф...",
					message: "Debuff coming soon..."
				});	
			}, 55000);
		}
	}

	return {
		// 1 BOSS
		"nd-3201-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//"s-3201-1000-103-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Dodge", message_RU: "Эвейд!" }],
		"s-3201-1000-104-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Stun attack", message_RU: "Стан!" }],
		"s-3201-1000-107-0": [
			{ type: "text", sub_type: "message", message: "back", message_RU: "|Полоса|" },
			{ type: "text", sub_type: "message", delay: 2250, message: "pull", message_RU: "Откид!!!" }
		],
		"s-3201-1000-111-0": [{ type: "text", sub_type: "message", message: "Back Wave", message_RU: "Волна назад" }],
		//"s-3201-1000-112-0": [{ type: "text", sub_type: "message", message: "Left + Right", message_RU: "Лево + Право" }],
		"s-3201-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Jump (Slow)", message_RU: "Прыжок" },
			{ type: "text", sub_type: "message", delay: 1500, message: "Pull", message_RU: "Камень!" }
		],
		"s-3201-1000-118-0": [
			{ type: "text", sub_type: "message", message: "Jump P (Slow)", message_RU: "Прыжок" },
			{ type: "text", sub_type: "message", delay: 1500, message: "Pull", message_RU: "Камень!" },
		],
		"s-3201-1000-119-0": [{ type: "text", sub_type: "message", delay: 1000, message: "Back + Front", message_RU: "Вперед + Назад" }],
		//"s-3201-1000-121-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Right", message_RU: "Право" }],
		//"s-3201-1000-122-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Left", message_RU: "Лево" }],
		"s-3201-1000-124-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Stun attack", message_RU: "Стан (фаст)" }],
		"s-3201-1000-127-0": [{ type: "text", class_position:"dps", sub_type: "message", message: "Back", message_RU: "Полоса (фаст)" },
			{ type: "text", class_position:"heal", sub_type: "message", message: "Back", message_RU: "Полоса (фаст)" }
		],
		//"s-3201-1000-128-0": [{ type: "text", class_position:"tank", sub_type: "message", message: "Triple Attack", message_RU: "Комба" }],
		"s-3201-1000-131-0": [{ type: "text", class_position:"dps", sub_type: "message", message: "Back Wave", message_RU: "Волна назад (фаст)" },
			{ type: "text", class_position:"heal", sub_type: "message", message: "Back Wave", message_RU: "Волна назад (фаст)" }
		],
		//"s-3201-1000-132-0": [{ type: "text", sub_type: "message", message: "Left + Right", message_RU: "Лево + Право (фаст)" }],
		"s-3201-1000-133-0": [{ type: "text", sub_type: "message", delay: 500, message: "Jump (Fast)", message_RU: "Прыжок (фаст)" }],
		"s-3201-1000-138-0": [{ type: "text", sub_type: "message", delay: 500, message: "Jump P (Fast)", message_RU: "Прыжок (фаст)" }],
		"s-3201-1000-139-0": [{ type: "text", sub_type: "message", message: "Back + Front (Fast)", message_RU: "Вперед + Назад (фаст)" }],
		"s-3201-1000-143-0": [
			{ type: "text", class_position:"tank", sub_type: "message", message: "Left > Right", message_RU: "Слева > Справа" },
			{ type: "text", class_position:"dps", sub_type: "message", message: "Right > Left", message_RU: "Справа > Слева" },
			{ type: "text", class_position:"heal", sub_type: "message", message: "Right > Left", message_RU: "Справа > Слева" },
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2715, true, null] },  // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2800, 4175, true, null] }, // 6
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] },   // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }  // 7
		],
		"s-3201-1000-145-0": [
			{ type: "text", class_position:"tank", sub_type: "message", message: "Left > Right", message_RU: "Слева > Справа" },
			{ type: "text", class_position:"dps", sub_type: "message", message: "Right > Left", message_RU: "Справа > Слева" },
			{ type: "text", class_position:"heal", sub_type: "message", message: "Right > Left", message_RU: "Справа > Слева" },
			{ type: "spawn", func: "marker", args: [false, 30, 300, 100, 1000, true, null] },   // 1
			{ type: "spawn", func: "marker", args: [false, 330, 300, 1100, 5000, true, null] }, // 7
			{ type: "spawn", func: "marker", args: [false, 150, 300, 100, 2000, true, null] },  // 1
			{ type: "spawn", func: "marker", args: [false, 225, 300, 2500, 5000, true, null] }  // 6
		],
		"s-3201-1000-148-0": [{ type: "text", sub_type: "message", message: "Right Hand (Flying)", message_RU: "Правая рука (подлет)" }],
		"s-3201-1000-149-0": [{ type: "text", sub_type: "message", message: "Left Hand (Flying)", message_RU: "Левая рука (подлет)" }],
		"s-3201-1000-151-0": [{ type: "text", sub_type: "message", message: "Stun Attack", message_RU: "Стан!" }],
		"s-3201-1000-305-0": [{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Pizza" }],
		"s-3201-1000-311-0": [
			{ type: "text", sub_type: "message", message_RU: "Мёд!" },
			{ type: "text", sub_type: "message", delay: 4000, message: "pull", message_RU: "Откид!" }
		],
		"s-3201-1000-312-0": [
			{ type: "text", sub_type: "message", message_RU: "Мёд (фаст)!" },
			{ type: "text", sub_type: "message", delay: 2000, message: "pull", message_RU: "Откид!" }
		],
		"s-3201-1000-313-0": [
			{ type: "text", sub_type: "message", message: "Circles (Slow)", message_RU: "Кольцо" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],
		"s-3201-1000-314-0": [
			{ type: "text", sub_type: "message", message: "Circles (Fast)", message_RU: "Кольцо (фаст)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 75, 10, 300, 0, 6000] }
		],

		// 2 BOSS
		"nd-3201-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3201-2000-99": [{ type: "func", func: secondboss_start_event }],
		"h-3201-2000-81": [{ type: "text", sub_type: "message", message: "80%", message_RU: "Дебафф" }],
		"h-3201-2000-76": [{ type: "text", sub_type: "message", message: "75%", message_RU: "Камни" }],
		"s-3201-2000-108-0": [{ type: "text", sub_type: "message", message: "Back Attack!", message_RU: "Откид назад!" }],
		"s-3201-2000-150-0": [{ type: "text", sub_type: "message", message: "Phantom", message_RU: "Фантом" }],
		"s-3201-2000-203-0": [{ type: "func", func: secondboss_debuff_event, args: [203] }],
		"s-3201-2000-204-0": [{ type: "func", func: secondboss_debuff_event, args: [204] }],
		"am-3201-320126-32010224": [
			{ type: "text", sub_type: "alert", message: "Next True", message_RU: "След. правда" },
			{ type: "func", func: secondboss_debuff_event, args: [32010224] }
		],
		"am-3201-2000-32010220": [
			{ type: "text", sub_type: "alert", message: "Next False", message_RU: "След. ложь" },
			{ type: "func", func: secondboss_debuff_event, args: [32010220] }
		],
		"s-3201-2000-228-0": [ 
			{ type: "text", sub_type: "message", message: "Team Up", message_RU: "Камни (вместе)!!!" },
			{ type: "text", sub_type: "message", delay: 3500, message: "Dodge", message_RU: "Эвейд" }
		],
		"s-3201-2000-230-0": [{ type: "text", sub_type: "message", message: "AOE", message_RU: "AOE!!" }],

		"s-3201-2000-231-0": [
			{ type: "text", sub_type: "message", message: "Out Safe", message_RU: "От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] }
		],
		"s-3201-2000-232-0": [{ type: "text", sub_type: "message", message: "In Safe", message_RU: "К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 3, 1000, 0, 3000] }
		],
		"s-3201-2000-234-0": [{ type: "func", func: secondboss_debuff_event, args: [234] }],
		"s-3201-2000-236-0": [{ type: "text", sub_type: "message", message: "Counter", message_RU: "Конус вперед (байт)" }],
	};
};