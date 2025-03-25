// 更新状态栏时间
function updateStatusBarTime() {
    const timeElement = document.querySelector('.status-bar-time');
    if (timeElement) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

// 初始化应用
function initApp() {
    // 更新状态栏时间
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000); // 每分钟更新一次
    
    // 检测是否在交互式原型中（iframe内）
    const isInIframe = window !== window.parent;
    
    // 设置标签切换
    const tabItems = document.querySelectorAll('.tab');
    if (tabItems.length) {
        tabItems.forEach(tab => {
            tab.addEventListener('click', function(e) {
                if (!isInIframe) {
                    // 仅在非iframe模式下执行默认行为
                    tabItems.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
    }
    
    // 按钮点击效果
    const buttons = document.querySelectorAll('.btn');
    if (buttons.length) {
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.classList.add('opacity-75');
                setTimeout(() => {
                    this.classList.remove('opacity-75');
                }, 150);
                
                // 在交互式原型中添加触觉反馈效果
                if (isInIframe && 'vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            });
        });
    }
    
    // 卡片项目点击效果
    const cardItems = document.querySelectorAll('.card:not(.p-0), .list-item');
    if (cardItems.length) {
        cardItems.forEach(item => {
            item.addEventListener('click', function() {
                this.classList.add('bg-gray-50');
                setTimeout(() => {
                    this.classList.remove('bg-gray-50');
                }, 150);
            });
        });
    }
    
    // 添加语音讲解试听功能
    const audioTrialButtons = document.querySelectorAll('.text-blue-500 .fa-headphones');
    if (audioTrialButtons.length) {
        audioTrialButtons.forEach(button => {
            button.parentElement.addEventListener('click', function(e) {
                e.preventDefault();
                
                const audio = document.createElement('audio');
                audio.src = "data:audio/mpeg;base64,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"
                
                // 显示播放指示器
                const playingIndicator = document.createElement('div');
                playingIndicator.className = 'fixed bottom-20 left-0 right-0 bg-blue-500 text-white py-3 px-4 flex items-center justify-between z-50';
                playingIndicator.innerHTML = `
                    <div class="flex items-center">
                        <i class="fas fa-volume-up mr-3"></i>
                        <div>
                            <div class="font-medium">正在播放试听</div>
                            <div class="text-xs opacity-80">故宫文化讲解</div>
                        </div>
                    </div>
                    <button class="bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                        <i class="fas fa-pause"></i>
                    </button>
                `;
                
                document.body.appendChild(playingIndicator);
                
                // 播放音频
                audio.play();
                
                // 3秒后移除播放指示器
                setTimeout(() => {
                    playingIndicator.style.opacity = '0';
                    playingIndicator.style.transition = 'opacity 0.5s';
                    setTimeout(() => {
                        playingIndicator.remove();
                    }, 500);
                }, 3000);
            });
        });
    }
    
    // 添加旅行卡片点击事件
    const travelCards = document.querySelectorAll('.travel-card');
    if (travelCards.length) {
        travelCards.forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('.travel-card-title')?.textContent;
                if (title) {
                    console.log(`选择了 ${title}`);
                }
            });
        });
    }
    
    // 添加位置模拟效果
    const locationButtons = document.querySelectorAll('.fa-map-marker-alt, .fa-location-arrow');
    if (locationButtons.length) {
        locationButtons.forEach(button => {
            button.closest('div, button, a').addEventListener('click', function(e) {
                if (!this.closest('a, button')) return;
                
                e.preventDefault();
                
                // 显示位置获取指示器
                const locationIndicator = document.createElement('div');
                locationIndicator.className = 'fixed top-0 left-0 right-0 bg-blue-500 text-white py-2 px-4 text-center z-50';
                locationIndicator.innerHTML = `<i class="fas fa-location-arrow mr-2"></i> 正在获取您的位置...`;
                
                document.body.appendChild(locationIndicator);
                
                // 模拟位置获取延迟
                setTimeout(() => {
                    locationIndicator.innerHTML = `<i class="fas fa-check-circle mr-2"></i> 位置已更新: 北京市东城区景山前街`;
                    
                    // 2秒后移除指示器
                    setTimeout(() => {
                        locationIndicator.style.opacity = '0';
                        locationIndicator.style.transition = 'opacity 0.5s';
                        setTimeout(() => {
                            locationIndicator.remove();
                        }, 500);
                    }, 2000);
                }, 1500);
            });
        });
    }
    
    // 模拟通知效果
    const notifyButtons = document.querySelectorAll('.fa-bell');
    if (notifyButtons.length) {
        notifyButtons.forEach(button => {
            button.closest('a').addEventListener('click', function(e) {
                e.preventDefault();
                
                // 显示通知列表
                const notifyList = document.createElement('div');
                notifyList.className = 'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50';
                notifyList.innerHTML = `
                    <div class="bg-white rounded-lg w-4/5 max-h-96 overflow-hidden">
                        <div class="flex justify-between items-center p-4 border-b">
                            <h3 class="font-bold">通知</h3>
                            <button class="text-gray-500" id="closeNotify">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="overflow-y-auto p-4 max-h-80">
                            <div class="border-b pb-3 mb-3">
                                <div class="flex justify-between mb-1">
                                    <div class="font-medium">行程提醒</div>
                                    <div class="text-xs text-gray-500">10分钟前</div>
                                </div>
                                <p class="text-sm text-gray-600">今天下午14:00您有安排前往鲁迅纪念馆，别忘了查看导览！</p>
                            </div>
                            <div class="border-b pb-3 mb-3">
                                <div class="flex justify-between mb-1">
                                    <div class="font-medium">系统消息</div>
                                    <div class="text-xs text-gray-500">1小时前</div>
                                </div>
                                <p class="text-sm text-gray-600">您的"鲁迅文化之旅"旅行计划已更新，点击查看详情。</p>
                            </div>
                            <div>
                                <div class="flex justify-between mb-1">
                                    <div class="font-medium">限时优惠</div>
                                    <div class="text-xs text-gray-500">昨天</div>
                                </div>
                                <p class="text-sm text-gray-600">故宫博物院门票限时8折优惠，点击购买。</p>
                            </div>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(notifyList);
                
                // 点击关闭
                document.getElementById('closeNotify').addEventListener('click', function() {
                    notifyList.style.opacity = '0';
                    notifyList.style.transition = 'opacity 0.3s';
                    setTimeout(() => {
                        notifyList.remove();
                    }, 300);
                });
                
                // 点击背景关闭
                notifyList.addEventListener('click', function(e) {
                    if (e.target === notifyList) {
                        notifyList.style.opacity = '0';
                        notifyList.style.transition = 'opacity 0.3s';
                        setTimeout(() => {
                            notifyList.remove();
                        }, 300);
                    }
                });
            });
        });
    }
    
    // 为导航切换添加动画效果
    const tabBar = document.querySelector('.tab-bar');
    if (tabBar && !isInIframe) {
        const tabs = tabBar.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 添加动画效果
                const span = this.querySelector('span');
                span.style.transform = 'translateY(-5px)';
                span.style.transition = 'transform 0.2s';
                
                setTimeout(() => {
                    span.style.transform = 'translateY(0)';
                }, 200);
            });
        });
    }
}

// 当DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', initApp);

// 模拟定位功能
function simulateLocation() {
    // 仅用于演示，实际应用中会使用设备的地理位置API
    console.log('正在获取位置信息...');
    setTimeout(() => {
        console.log('已获取位置信息: 北京市东城区');
    }, 1000);
}

// 为导航按钮绑定事件
document.addEventListener('click', function(e) {
    // 处理导航链接点击
    if (e.target.closest('.tab') || e.target.closest('a[href]')) {
        // 实际应用中会通过路由系统处理导航
        console.log('导航到:', e.target.closest('a')?.getAttribute('href') || '首页');
    }
    
    // 处理地图相关按钮
    if (e.target.closest('.fa-location-arrow')) {
        simulateLocation();
    }
    
    // 处理表单提交
    if (e.target.closest('form')) {
        e.preventDefault();
        console.log('表单提交');
    }
});
