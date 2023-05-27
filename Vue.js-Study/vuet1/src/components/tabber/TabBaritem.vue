<template>
	<div class="tab-bar-item" @click="addRoute()">
		<div class="item-icon" v-if="isActive">
			<slot name="img-gray"></slot>
		</div>
		<div class="item-icon" v-else>
			<slot name="img-ictive"></slot>
		</div>
		<div :style="activeStyle" class="item-text">
			<slot name="item-icon"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabBaritem",
		props: {
			path: String,
			activeColor: {
				type: String,
				default: 'red'
			}
		},
		data() {
			return {
				// isActive: false
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle() {
				return this.isActive ? {
					color: this.activeColor
				} : {color: this.color} //修改默认颜色
			}
		},
		methods: {
			addRoute() {
				this.$router.replace(this.path);
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		cursor: pointer;
	}

	.item-icon {
		display: inline-block;
	}

	.item-icon img {
		width: 1.5rem;
		height: 1.5rem;
	}

	.item-text span {
		font-size: calc(1);
		font-family: "Arial", "Microsoft YaHei";
		font-weight: 500;
	}
</style>
